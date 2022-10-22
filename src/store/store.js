import { configureStore } from '@reduxjs/toolkit';
import getCategorieNamesReducer from './reducers/getCategorieNamesReducer';
import getCartReducer from './reducers/getCartReducer';
import userReducer from './reducers/userReducer';



export const store = configureStore({
    reducer: {
        categories: getCategorieNamesReducer,
        cart: getCartReducer,
        user: userReducer,
    },
})