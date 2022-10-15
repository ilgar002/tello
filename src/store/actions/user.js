import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { commerce } from '../../commerce';


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ firstname, lastname, email, phone, }) => {
        try {
            const url = new URL(
                "https://api.chec.io/v1/customers"
            );

            let headers = {
                "X-Authorization": "sk_47165c63f179ac44fc4e178dca07476d285a5e5c7cf3e",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phone": phone,
            }

            const response = await axios.post(url, body, { headers: headers });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, baseUrl }) => {
        try {

            const url = new URL(
                "https://api.chec.io/v1/customers/email-token"
            );

            let headers = {
                "X-Authorization": "sk_47165c63f179ac44fc4e178dca07476d285a5e5c7cf3e",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "email": email,
                "base_url": `${baseUrl}/create-token`
            }

            const response = await axios.post(url, body, { headers: headers });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        try {
            const response = await commerce.customer.about();
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({ firstname, lastname, email, phone, id }) => {
        try {
            const response = await commerce.customer.update({
                email,
                firstname,
                lastname,
                phone
            }, id)
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)