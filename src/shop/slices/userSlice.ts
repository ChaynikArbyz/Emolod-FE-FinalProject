import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserState } from '../../types/User';
import { getCurrentUser } from '../../services/localStorageHelper';


const initialState: UserState = getCurrentUser() || {
    id: 0,
    name: '',
    token: '',
    totalCount: 0,
    cart: []
};

const changeTotalCount = (state: UserState): void => {
    if (!state.cart) {
        state.totalCount = 0;
    } else {
        state.totalCount = state.cart.reduce((total, item) => total + item.quantity, 0);
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addBookToCart(state, action: PayloadAction<number>) {
            if (!state.cart) {
                state.cart = [];
            }
            const existingItem = state.cart.find(item => item.bookId === action.payload);
            if (!existingItem) {
                state.cart.push({ bookId: action.payload, quantity: 1 });
            } else {
                existingItem.quantity += 1;
            }

            changeTotalCount(state);
        },
        removeOneBookFromCart(state, action: PayloadAction<number>) {
            if (!state.cart) {
                state.cart = [];
            }
            const existingItem = state.cart.find(item => item.bookId === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(item => item.bookId !== action.payload);
                }
                changeTotalCount(state);
            }
        },
        removeBookFromCart(state, action: PayloadAction<number>) {
            if (!state.cart) {
                state.cart = [];
            }
            state.cart = state.cart.filter(item => item.bookId !== action.payload);
            changeTotalCount(state);
        }
    }
});

export const { addBookToCart, removeBookFromCart, removeOneBookFromCart } = userSlice.actions;
export default userSlice.reducer;