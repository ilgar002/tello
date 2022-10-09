import { createAsyncThunk } from '@reduxjs/toolkit';
import { commerce } from '../../commerce';

export const getAllProducts = createAsyncThunk('name/getAllProducts',
    async (params) => {
        try {
            const response = await commerce.products.list(params);
            return response;
        }
        catch (err) {
            return err.message
        }
    })

export const getBestSellers = createAsyncThunk('name/getBestSellers',
    async () => {
        try {
            const response = await commerce.products.list({
                limit: 50,
            });
            let currentIndex = response.data.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [response.data[currentIndex], response.data[randomIndex]] = [
                    response.data[randomIndex], response.data[currentIndex]];
            }
            return response.data;
        }
        catch (err) {
            return err.message
        }
    })

export const getNews = createAsyncThunk('name/getNews',
    async () => {
        try {
            const response = await commerce.products.list({
                sortBy: "created",
                sortDirection: 'desc',
                limit: 50,
            });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    })

export const getAccessories = createAsyncThunk('name/getAccessories',
    async () => {
        try {
            const response = await commerce.products.list({
                category_slug: ['aksesuarlar'],
                limit: 50,
            });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    })

export const getProduct = createAsyncThunk('name/getProduct',
    async (id) => {
        try {
            const response = await commerce.products.retrieve(id);;
            return response;
        }
        catch (err) {
            return err.message
        }
    })

export const getVariants = createAsyncThunk('name/getVariants',
    async (id) => {
        try {
            const response = await commerce.products.getVariants(id)
            return response;
        }
        catch (err) {
            return err.message
        }
    })


