import classes from "./SortProduct.module.css";

const SortProduct = () => {
    return (
        <div className={classes.filter}>
          <form className={classes.filtercontrol}>
            <label>Sort by</label>
            <select>
            <option value="featured">Featured</option>
              <option value="low to high">Price: Low to High</option>
              <option value="high to low">Price: High to Low</option>
            </select>
          </form>
        </div>
      );
}
export default SortProduct;