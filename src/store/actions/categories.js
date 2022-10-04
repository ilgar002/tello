import { createAsyncThunk } from '@reduxjs/toolkit';
import { commerce } from '../../commerce';

export const getCategorieNames = createAsyncThunk('name/getCategorieNames',
    async () => {
        try {
            const response = await commerce.categories.list({
                sortBy: "created",
                sortDirection: 'asc',
            });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    })

