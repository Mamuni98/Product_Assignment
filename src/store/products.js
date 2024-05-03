import { createSlice } from "@reduxjs/toolkit";
const productsInitialState = {
  change: false,
  allProducts: [],
  editData: {},
  sort: true,
  searchLetter: "",
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
      state.change = true;
    },
    saveFinalList(state, action) {
      state.allProducts = action.payload;
      state.change = false;
    },
    addSearchLetter(state, action) {
      if (action.payload.length === 0) {
        state.sort = true;
      } else {
        state.sort = false;
        const letters = action.payload.toLowerCase();
        state.searchLetter = letters;
      }
      state.change = false;
    },
    addSortBy(state, action) {
      let products = [...state.allProducts];
      state.sort = true;
      let sorted;
      if (action.payload === "featured") {
        sorted = products;
      } else if (action.payload === "low to high") {
        sorted = products.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        sorted = products.sort((a, b) => {
          return b.price - a.price;
        });
      }
      state.allProducts = sorted;
      state.change = false;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
