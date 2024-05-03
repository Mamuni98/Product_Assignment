import { createSlice } from "@reduxjs/toolkit";
const productsInitialState = {
  change: false,
  allProducts: [],
  editData: {},
};

const productSlice = createSlice({
  name: "productList",
  initialState: productsInitialState,
  reducers: {
    addProduct(state, action) {
      if (Object.keys(state.editData).length > 0) {
        const existingItemIndex = state.allProducts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.allProducts[existingItemIndex] = action.payload;
      } else {
        state.allProducts.push(action.payload);
      }
      state.change = true;
      state.editData = {};
    },

    deleteProduct(state, action) {
      const updatedProducts = state.allProducts.filter(
        (item) => item.id !== action.payload
      );
      state.allProducts = updatedProducts;
      state.change = true;
    },
    editProduct(state, action) {
      const existingItemIndex = state.allProducts.findIndex(
        (item) => item.id === action.payload
      );
      const editDetail = state.allProducts[existingItemIndex];
      state.editData = editDetail;
    },
    saveFinalList(state, action) {
      state.allProducts = action.payload;
      state.change = false;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
