import { createSlice } from '@reduxjs/toolkit'
import { getUser, updateUser } from '../actions/user';
import { commerce } from '../../commerce';

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
        },
    },
    reducers: {
        logoutUser: (state) => {
            state.user = {}
            commerce.customer.logout();
        }
    }
})
export const { logoutUser } = userSlice.actions

export default userSlice.reducer