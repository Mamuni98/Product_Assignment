import classes from "./ProductList.module.css";
import Product from "./Product";
import data from "../data/dummyData.json";

const ProductList = () => {
  const products = data.products;
  return (
    <ul className={classes.notelists}>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
