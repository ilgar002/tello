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



export const addToCart = createAsyncThunk('name/addToCart',
    async (params) => {
        try {
            const response = await commerce.cart.add(params.product_id, params.quantity, params.variantData);
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
            return response
        }
        catch (err) {
            return err.message
        }
    })

export const updateCart = createAsyncThunk('name/updateCart',
    async (params) => {
        try {
            const response = await commerce.cart.update(params.id, { quantity: params.quantity })
            return response
        }
        catch (err) {
            return err.message
        }
    })