import classes from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productFilterActions } from "../store/filterSort";

const SearchBar = () => {
  const [searchLetters, setSearchLetters] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFilterActions.addSearchLetter(searchLetters));
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
