import classes from "./ProductList.module.css";
import Product from "./Product";
import SearchBar from "../Search/SearchBar";
import SortProduct from "../Search/SortProduct";
import { useSelector } from "react-redux";
const ProductList = () => {
  const products = useSelector((state) => state.products.allProducts);
  return (
    <>
      <SearchBar />
      <SortProduct />
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
    </>
  );
};

export default ProductList;
