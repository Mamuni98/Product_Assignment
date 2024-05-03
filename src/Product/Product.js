import classes from "./Product.module.css";
import { productActions } from "../store/products";
import { useDispatch } from "react-redux";
const Product = ({ id, title, price }) => {
  
  const dispatch = useDispatch();
  const deleteProductHandler = () => {
    dispatch(productActions.deleteProduct(id));
  };
  return (
    <li className={classes.list}>
      <div className={classes.listcontent}>
        <h3>{title}</h3>
        <h4>Rs. {price}</h4>
      </div>

      <div className={classes.listbtns}>
        <button>Edit</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </li>
  );
};

export default Product;
