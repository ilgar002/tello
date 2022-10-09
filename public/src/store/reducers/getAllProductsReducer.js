import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../actions/products';

const initState = {
    allProducts: [],
    loading: false,
    errors: null,
}

const getAllProductsSlice = createSlice({
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
            state.allProducts = payload
        },
    }
})

export default getAllProductsSlice.reducer;