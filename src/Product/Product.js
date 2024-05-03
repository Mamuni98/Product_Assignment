import classes from "./Product.module.css";
import { productActions } from "../store/products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = ({ id, title, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteProductHandler = () => {
    dispatch(productActions.deleteProduct(id));
  };
  const editProductHandler = () => {
    dispatch(productActions.editProduct(id));
    navigate("/addProduct");
  };
  return (
    <li className={classes.list}>
      <div className={classes.listcontent}>
        <h3>{title}</h3>
        <h4>Rs. {price}</h4>
      </div>

      <div className={classes.listbtns}>
        <button onClick={editProductHandler}>Edit</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </li>
  );
};

export default Product;
