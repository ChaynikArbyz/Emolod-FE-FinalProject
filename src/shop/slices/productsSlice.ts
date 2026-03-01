import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CreateProduct, ProductsState } from '../../types/product';
import { customAxios } from '../customAxios';


const initialState: ProductsState = {
    products: [],
    currentProduct: null,  
    isLoading: false,
    error: null
};

export const getAllProducts = createAsyncThunk(
    'products/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await customAxios.get('/products');
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to fetch products');
        }
    }
);

export const getProductById = createAsyncThunk(
    'products/getById',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await customAxios.get(`/products/${id}`);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to fetch product');
        }
    }
);

export const createProduct = createAsyncThunk(
    'products/create',
    async (productData: CreateProduct, { rejectWithValue }) => {
        try {
            const response = await customAxios.post('/products', productData);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to create product');
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/update',
    async ({ id, productData }: { id: number, productData: CreateProduct }, { rejectWithValue }) => {
        try {
            const response = await customAxios.put(`/products/${id}`, productData);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to update product');
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await customAxios.delete(`/products/${id}`);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to delete product');
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.products = action.payload;
                state.currentProduct = null;
            })
            .addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                const index = state.products.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(updateProduct.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.products = state.products.filter(p => p.id !== action.payload.id);            
            })
            .addCase(deleteProduct.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProductById.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.currentProduct = action.payload;
            })
            .addCase(getProductById.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;