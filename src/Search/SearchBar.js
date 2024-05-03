import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../store/products";
const SearchBar = () => {
  const [searchLetters, setSearchLetters] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.addSearchLetter(searchLetters));
  }, [searchLetters, dispatch]);

  const searchHandler = (event) => {
    setSearchLetters(event.target.value);
  };
  return (
    <div className={classes.search}>
      <h3>Search Product</h3>
      <input
        placeholder="Search by Title..."
        value={searchLetters}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
