import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import ProductReducer from "./products";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products:ProductReducer,
    
  },
});

export default store;
