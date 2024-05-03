import { createSlice } from "@reduxjs/toolkit";
const productsInitialState = {
  change: false,
  allProducts: [],
  editData: {},
  readDetail: {},
  sort: true,
  searchLetter: "",
};

const productSlice = createSlice({
  name: "productList",
  initialState: productsInitialState,
  reducers: {
    //add new and edited product to the list
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

   //delete product from the list
    deleteProduct(state, action) {
      const updatedProducts = state.allProducts.filter(
        (item) => item.id !== action.payload
      );
      state.allProducts = updatedProducts;
      state.change = true;
    },

    //save the details of the edit list
    editProduct(state, action) {
      const existingItemIndex = state.allProducts.findIndex(
        (item) => item.id === action.payload
      );
      const editDetail = state.allProducts[existingItemIndex];
      state.editData = editDetail;
      state.change = true;
    },
    //save detail of the product
    addProductDetail(state, action) {
      state.readDetail = action.payload;
      state.change = false;
    },
    //final data fetched from database
    saveFinalList(state, action) {
      state.allProducts = action.payload;
      state.change = false;
    },
    //save the the letters for search
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
    //filter the products according to the sort by
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
