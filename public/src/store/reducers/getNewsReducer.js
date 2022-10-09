import { createSlice } from '@reduxjs/toolkit';
import { getNews } from '../actions/products';


const initState = {
    products: [],
    loading: false,
    errors: null,
}

const getNewsSlice = createSlice({
    name: 'getNews',
    initialState: initState,
    extraReducers: {
        [getNews.pending]: (state) => {
            state.loading = true
        },
        [getNews.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getNews.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
    }
})

export default getNewsSlice.reducer;