import { configureStore } from '@reduxjs/toolkit';
import getAllProducts from './reducers/getAllProductsReducer';
import getNewsReducer from './reducers/getNewsReducer';
import getBestSellersReducer from './reducers/getBestSellersReducer';
import getAccessoriesReducer from './reducers/getAccessoriesReducer';
import getCategorieNamesReducer from './reducers/getCategorieNamesReducer';
import getProductReducer from './reducers/getProductReducer';
import getCartReducer from './reducers/getCartReducer';



export const store = configureStore({
    reducer: {
        allProducts: getAllProducts,
        news: getNewsReducer,
        bestSellers: getBestSellersReducer,
        accessories: getAccessoriesReducer,
        categories: getCategorieNamesReducer,
        product: getProductReducer,
        cart: getCartReducer,
    },
})