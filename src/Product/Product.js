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
  const productDetailHandler = ()=>{
    dispatch(productActions.addProductDetail({id:id, title:title, price:price, catagory:catagory, description:description}))
  }
  return (
    <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
    <li className={classes.list} onClick={productDetailHandler}>
      <div className={classes.listcontent}>
        <h3>{title}</h3>
        <h4>Rs. {price}</h4>
      </div>

      <div className={classes.listbtns}>
        <button onClick={editProductHandler}>Edit</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </li>
    </Link>
  );
};

export default Product;
