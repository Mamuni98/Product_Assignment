import classes from "./ProductForm.module.css";
const ProductForm = () => {
  return (
    <>
      <form>
        <div className={classes.form}>
          <div className={classes.control}>
            <label>Title</label>
            <input type="text" placeholder="Enter product name" />
          </div>
          <div className={classes.control}>
            <label>Catagory</label>
            <select>
              <option value="Perfume">Perfume</option>
              <option value="Electronics">Electronics</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Skincare">Skincare</option>
              <option value="Makeup">Makeup</option>
              <option value="Shoes">Shoes</option>
              <option value="Jwellery">Jwellery</option>
              <option value="Home Decor">Home Decor</option>
            </select>
          </div>

          <div className={classes.control}>
            <label>Price</label>
            <input type="number" min={1} />
          </div>
          <div className={classes.control}>
            <label>Description</label>
            <textarea
              rows="5"
              cols="50"
              placeholder="Add details about the product here..."
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
