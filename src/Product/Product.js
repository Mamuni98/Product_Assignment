import classes from "./Product.module.css";
import { productActions } from "../store/products";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Product = ({ id, title, price, catagory, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteProductHandler = () => {
    dispatch(productActions.deleteProduct(id));
  };
  const editProductHandler = () => {
    dispatch(productActions.editProduct(id));
    navigate("/addProduct");
  };
  const productDetailHandler = () => {
    dispatch(
      productActions.addProductDetail({
        id: id,
        title: title,
        price: price,
        catagory: catagory,
        description: description,
      })
    );
  };
  return (
    <li className={classes.list}>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <div className={classes.listcontent} onClick={productDetailHandler}>
          <h3>{title}</h3>
          <h4>Rs. {price}</h4>
        </div>
      </Link>
      <div className={classes.listbtns}>
        <button onClick={editProductHandler}>Edit</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </li>
  );
};

export default Product;
