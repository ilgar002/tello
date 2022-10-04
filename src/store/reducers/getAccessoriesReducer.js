import { createSlice } from '@reduxjs/toolkit';
import { getAccessories } from '../actions/products';

const initState = {
    products: [],
    loading: false,
    errors: null,
}

const getAccessoriesSlice = createSlice({
    name: 'accessories',
    initialState: initState,
    extraReducers: {
        [getAccessories.pending]: (state) => {
            state.loading = true
        },
        [getAccessories.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getAccessories.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
    }
})

export default getAccessoriesSlice.reducer;