import { createAsyncThunk } from '@reduxjs/toolkit';
import { commerce } from '../../commerce';


export const getCart = createAsyncThunk('name/getCart',
    async () => {
        try {
            const response = await commerce.cart.retrieve();
            return response;
        }
        catch (err) {
            return err.message
        }
    })

// export const getCartContents = createAsyncThunk('name/getCartContents',
//     async () => {
//         try {
//             const response = await commerce.cart.contents()
//             console.log(response);
//             return response;
//         }
//         catch (err) {
//             return err.message
//         }
//     })

export const addToCart = createAsyncThunk('name/addToCart',
    async (params) => {
        try {
            const response = await commerce.cart.add(params.product_id, params.quantity);
            return response
        }
        catch (err) {
            return err.message
        }
    })

export const removeFromCart = createAsyncThunk('name/removeFromCart',
    async (params) => {
        try {
            const response = await commerce.cart.remove(params.id)
            console.log(response);
            return response
        }
        catch (err) {
            return err.message
        }
    })

export const updateCart = createAsyncThunk('name/updateCart',
    async (params) => {
        console.log(params);
        try {
            const response = await commerce.cart.update(params.id, { quantity: params.quantity })
            console.log(response);
            return response
        }
        catch (err) {
            return err.message
        }
    })