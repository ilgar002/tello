import { createSlice } from '@reduxjs/toolkit';
import { getBestSellers } from '../actions/products';

const initState = {
    products: [],
    loading: false,
    errors: null,
}

const getBestSellersSlice = createSlice({
    name: 'bestSellers',
    initialState: initState,
    extraReducers: {
        [getBestSellers.pending]: (state) => {
            state.loading = true
        },
        [getBestSellers.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getBestSellers.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
    }
})

export default getBestSellersSlice.reducer;