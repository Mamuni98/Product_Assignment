import classes from "./ProductForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../store/products";

const ProductForm = () => {
  const [data, setData] = useState({
    title: "",
    catagory: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const finalData = { ...data, id: Math.random().toString() };
    dispatch(productActions.addProduct(finalData));
    setData({
      title: "",
      catagory: "",
      price: "",
      description: "",
    });
    navigate("/product");
    alert("Product added successfully..");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.form}>
          <div className={classes.control}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter product name"
              name="title"
              value={data.title}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Catagory</label>
            <select
              name="catagory"
              value={data.catagory}
              onChange={changeHandler}
            >
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
            <input
              type="number"
              min={1}
              name="price"
              value={data.price}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Description</label>
            <textarea
              rows="5"
              cols="50"
              placeholder="Add details about the product here..."
              name="description"
              value={data.description}
              onChange={changeHandler}
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
