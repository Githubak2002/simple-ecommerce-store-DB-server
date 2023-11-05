import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from './createSlice'
import CartReducer from './cartSlice'
import FavReducer from './watchListSlice'
const store = configureStore({
    reducer:{
        cart: CartReducer,
        fav : FavReducer,
    }
});

export default store;