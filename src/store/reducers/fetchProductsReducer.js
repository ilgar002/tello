import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../actions/products';

const initState = {
    products: [],
    loading: false,
    errors: null,
}

const fetchProductsSlice = createSlice({
    name: 'fetchProducts',
    initialState: initState,
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true
        },
        [getAllProducts.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
    }
})

export default fetchProductsSlice.reducer;