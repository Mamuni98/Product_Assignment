import classes from "./SortProduct.module.css";
import { useDispatch } from "react-redux";
import { productFilterActions } from "../store/filterSort";
import { useEffect, useState } from "react";
const SortProduct = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    dispatch(productFilterActions.addFilterSortBy(sortBy));
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
