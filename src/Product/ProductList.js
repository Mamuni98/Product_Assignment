import classes from "./ProductList.module.css";
import Product from "./Product";
import SearchBar from "../Search/SearchBar";
import SortProduct from "../Search/SortProduct";
import { useSelector } from "react-redux";
const ProductList = () => {
  const products = useSelector((state) => state.products.allProducts);
  const sort = useSelector((state) => state.filterSort.sort);
  const sortBy = useSelector((state) => state.filterSort.sortBy);
  const searchTerm = useSelector((state) => state.filterSort.searchLetter);
  let list;
  if (sort) {
    let sortedProducts = [...products];
    if(sortBy==="featured"){
      list = products;}
    else{
    sortedProducts.sort((a,b)=>{
    if(sortBy==="low to high") return a.price-b.price;
    else return b.price-a.price; })
    list = sortedProducts;
    }
    console.log(list);
  } else {
    list = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }

  return (
    <>
      <SearchBar />
      <SortProduct />
      <ul className={classes.notelists}>
        {list.map((product) => {
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
