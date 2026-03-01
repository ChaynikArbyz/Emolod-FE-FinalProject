import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import products from './slices/productsSlice';
import { saveCartForCurrentUser, saveTotalCountForCurrentUser } from '../services/localStorageHelper';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: products
  },
});

window.addEventListener('beforeunload', () => {
  const state = store.getState();
  saveCartForCurrentUser(state.user.cart || []);
  saveTotalCountForCurrentUser(state.user.totalCount);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
