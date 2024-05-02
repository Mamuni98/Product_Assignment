import classes from "./SearchBar.module.css";
import { useState } from "react";
const SearchBar = () => {
    const [searchLetters, setSearchLetters] = useState("");
  
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