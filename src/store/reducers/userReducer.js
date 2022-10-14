import { createSlice } from '@reduxjs/toolkit'
import { getUser, updateUser } from '../actions/user';

const initialState = {
    user: {},
    loading: false,
    error: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            console.log(payload);
            state.user = payload;
        }
        ,
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            console.log(payload);
        },
    }
})

export default userSlice.reducer