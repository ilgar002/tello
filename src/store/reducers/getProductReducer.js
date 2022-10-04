import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from '../actions/products';


const initState = {
    product: [],
    loading: false,
    errors: null,
}

const getProductSlice = createSlice({
    name: 'product',
    initialState: initState,
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.loading = true
        },
        [getProduct.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log(payload);
            state.product = payload
        },
    }
})

export default getProductSlice.reducer;