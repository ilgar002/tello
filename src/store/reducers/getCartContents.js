import { createSlice } from '@reduxjs/toolkit';
import { getCartContents } from '../actions/cart';

const initState = {
    cart: [],
    loading: false,
    errors: null,
}

const getCartContentsSlice = createSlice({
    name: 'bestSellers',
    initialState: initState,
    extraReducers: {
        [getCartContents.pending]: (state) => {
            state.loading = true
        },
        [getCartContents.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getCartContents.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.cart = payload
        },
    }
})

export default getCartContentsSlice.reducer;