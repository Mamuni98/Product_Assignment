import { createSlice } from "@reduxjs/toolkit";
const productsInitialState = {
    change:false,
    allProducts:[],
}

const productSlice = createSlice({
    name: "productList",
    initialState: productsInitialState,
    reducers: {
      
      addProduct(state, action) {
       state.allProducts.push(action.payload);
       state.change = true;
      },
     
      deleteProduct(state, action) {
       
      },
      editProduct(state,action){

      },
      saveFinalList(state, action){
        state.allProducts = action.payload;
        state.change = false;
      }
    },
  });
  
  export const productActions = productSlice.actions;
  
  export default productSlice.reducer;