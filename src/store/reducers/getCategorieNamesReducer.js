import { createSlice } from '@reduxjs/toolkit';
import { getCategorieNames } from "../actions/categories";

const initState = {
    categories: [],
    loading: false,
    errors: null,
}

const getCategorieNamesSlice = createSlice({
    name: 'categories',
    initialState: initState,
    extraReducers: {
        [getCategorieNames.pending]: (state) => {
            state.loading = true
        },
        [getCategorieNames.rejected]: (state, payload) => {
            state.loading = false
            state.errors = payload
        },
        [getCategorieNames.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        },
    }
})

export default getCategorieNamesSlice.reducer;