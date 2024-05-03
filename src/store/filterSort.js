import { createSlice } from "@reduxjs/toolkit";

const productsFilterInitialState = {
  sort: true,
  sortBy: "featured",
  searchLetter: "",
};

const productFilterSlice = createSlice({
  name: "productsFilter",
  initialState: productsFilterInitialState,
  reducers: {
    addFilterSortBy(state, action) {
      state.sort = true;
      state.sortBy = action.payload;
    },
    addSearchLetter(state, action) {
      if (action.payload.length === 0) {
        state.sort = true;
      } else {
        state.sort = false;
        const letters = action.payload.toLowerCase();
        state.searchLetter = letters;
      }
    },
  },
});

export const productFilterActions = productFilterSlice.actions;

export default productFilterSlice.reducer;
