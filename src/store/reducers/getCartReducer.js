import { createSlice } from '@reduxjs/toolkit';
import { getCart, addToCart, removeFromCart, updateCart } from '../actions/cart';

const initState = {
    cart: [],
    loading: false,
    errors: null,
}

const getCartSlice = createSlice({
    name: 'bestSellers',
    initialState: initState,
    extraReducers: {
        [getCart.pending]: (state) => {
            state.loading = true
        },
        [getCart.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getCart.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.cart = payload
        },
        [addToCart.pending]: (state) => {
            state.loading = true;
        },
        [addToCart.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [addToCart.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        },
        [removeFromCart.pending]: (state) => {
            state.loading = true;
        },
        [removeFromCart.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [removeFromCart.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        },
        [updateCart.pending]: (state) => {
            state.loading = true;
        },
        [updateCart.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [updateCart.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        },
    }
})

export default getCartSlice.reducer;