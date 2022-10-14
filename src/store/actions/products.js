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

export const getBestSellers =
    async (setLoading, setProducts) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({
                limit: 100,
            });
            let currentIndex = response.data.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [response.data[currentIndex], response.data[randomIndex]] = [
                    response.data[randomIndex], response.data[currentIndex]];
            }
            setProducts(response.data)
            setLoading(false)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }

export const getNews =
    async (setLoading, setProducts) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({
                sortBy: "created",
                sortDirection: 'desc',
                limit: 50,
            });
            setProducts(response.data)
            setLoading(false)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }

export const getAccessories =
    async (setLoading, setProducts) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({
                category_slug: ['aksesuarlar'],
                limit: 50,
            });
            setProducts(response.data)
            setLoading(false)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }

export const getProduct =
    async (setLoading, setProduct, id) => {
        try {
            setLoading(true)
            const response = await commerce.products.retrieve(id);
            setProduct(response)
            setLoading(false)
            return response;
        }
        catch (err) {
            return err.message
        }
    }

export const getVariants = async (id) => {
    try {
        const response = await commerce.products.getVariants(id)
        return response.data;
    }
    catch (err) {
        return err.message
    }
}






