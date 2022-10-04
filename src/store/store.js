import { configureStore } from '@reduxjs/toolkit';
import fetchProductsReducer from './reducers/fetchProductsReducer';
import getNewsReducer from './reducers/getNewsReducer';
import getBestSellersReducer from './reducers/getBestSellersReducer';
import getAccessoriesReducer from './reducers/getAccessoriesReducer';
import getCategorieNamesReducer from './reducers/getCategorieNamesReducer';
import getProductReducer from './reducers/getProductReducer';



export const store = configureStore({
    reducer: {
        products: fetchProductsReducer,
        news: getNewsReducer,
        bestSellers: getBestSellersReducer,
        accessories: getAccessoriesReducer,
        categories: getCategorieNamesReducer,
        product: getProductReducer,
    },
})