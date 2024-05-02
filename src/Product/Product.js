import classes from "./Product.module.css";

const Product = ({title, price}) => {
  return (
    <li className={classes.list}>
      <div className={classes.listcontent}>
        <h3>{title}</h3>
        <h4>Rs. {price}</h4>
      </div>

      <div className={classes.listbtns}>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default Product;
