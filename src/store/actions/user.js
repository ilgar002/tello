import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

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
            console.log(response.data)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email }) => {
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
                "base_url": "http://localhost:3000/generate-token"
            }

            const response = await axios.post(url, body, { headers: headers });
            console.log(response.data)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)