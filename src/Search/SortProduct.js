import classes from "./SortProduct.module.css";
import { useDispatch } from "react-redux";
import { productActions } from "../store/products";
import { useEffect, useState } from "react";
import axios from "axios";

const SortProduct = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    dispatch(productActions.addSortBy(sortBy));
  }, [sortBy, dispatch]);
  useEffect(() => {
    const useremail = localStorage.getItem("email");
    if (useremail && sortBy === "featured") {
      const user = useremail.replace("@", "").replace(".", "");

      const finalDataFromDataBase = async () => {
        try {
          const response = await axios.get(
            `https://productsassignment-default-rtdb.firebaseio.com/${user}.json`
          );
          if(response.data){
            dispatch(productActions.saveFinalList(response.data.userProducts));
          }
        } catch (error) {
          console.log(error);
        }
      };
      finalDataFromDataBase();
    }
  }, [sortBy, dispatch]);

  const sortProductsHandler = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };
  return (
    <div className={classes.filter}>
      <form className={classes.filtercontrol}>
        <label>Sort by</label>
        <select name="sortBy" value={sortBy} onChange={sortProductsHandler}>
          <option value="featured">Featured</option>
          <option value="low to high">Price: Low to High</option>
          <option value="high to low">Price: High to Low</option>
        </select>
      </form>
    </div>
  );
};
export default SortProduct;
