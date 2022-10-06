import { createAsyncThunk } from '@reduxjs/toolkit';
import { commerce } from '../../commerce';


export const getCartContents = createAsyncThunk('name/getCartContents',
    async () => {
        try {
            const response = await commerce.cart.contents()
            return response;
        }
        catch (err) {
            return err.message
        }
    })

export const addToCart = createAsyncThunk('name/addToCart',
    async (params) => {
        try {
            commerce.cart.add(params.product_id, params.quantity);
        }
        catch (err) {
            return err.message
        }
    })

export const removeFromCart = createAsyncThunk('name/removeFromCart',
    async (params) => {
        try {
            commerce.cart.remove(params.id)
        }
        catch (err) {
            return err.message
        }
    })