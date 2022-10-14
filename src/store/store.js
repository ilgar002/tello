import { configureStore } from '@reduxjs/toolkit';
import getAllProducts from './reducers/getAllProductsReducer';
import getCategorieNamesReducer from './reducers/getCategorieNamesReducer';
import getCartReducer from './reducers/getCartReducer';
import userReducer from './reducers/userReducer';



export const store = configureStore({
    reducer: {
        allProducts: getAllProducts,
        categories: getCategorieNamesReducer,
        cart: getCartReducer,
        user: userReducer,
    },
})