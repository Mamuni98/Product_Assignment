// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// const products = useSelector((state) => state.products.allProducts);

// const productsFilterInitialState = {
//   sort: true,
//   sortBy: "featured",
//   searchLetter: "",
// };

// const productFilterSlice = createSlice({
//   name: "productsFilter",
//   initialState: productsFilterInitialState,
//   reducers: {
//     addFilterSortBy(state, action) {
//       state.sort = true;
//       state.sortBy = action.payload;
     
//   if (sort) {
//     let sortedProducts = [...products];
//     if(sortBy==="featured"){
//       list = products;}
//     else{
//     sortedProducts.sort((a,b)=>{
//     if(sortBy==="low to high") return a.price-b.price;
//     else return b.price-a.price; })
//     list = sortedProducts;
//     }
//     console.log(list);
//   } 
//     },
//     addSearchLetter(state, action) {
//       if (action.payload.length === 0) {
//         state.sort = true;
//       } else {
//         state.sort = false;
//         const letters = action.payload.toLowerCase();
//         state.searchLetter = letters;
//       }
//     },
//   },
// });

// export const productFilterActions = productFilterSlice.actions;

// export default productFilterSlice.reducer;
