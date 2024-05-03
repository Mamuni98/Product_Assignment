import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import ProductReducer from "./products";
import FilterSortReducer from "./filterSort";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products:ProductReducer,
    filterSort: FilterSortReducer
  },
});

export default store;
