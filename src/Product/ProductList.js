import classes from "./ProductList.module.css";
import Product from "./Product";
import SearchBar from "../Search/SearchBar";
import SortProduct from "../Search/SortProduct";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.products.allProducts);
  const sort = useSelector((state) => state.products.sort);
  const searchTerm = useSelector((state) => state.products.searchLetter);
  const productsPerPage = 5;
  useEffect(() => {
    
    if (sort) {
      setData(products);
    } else {
      setData((prev) =>
        prev.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        )
      );
    }
  }, [products, sort, searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <SearchBar />
      <SortProduct />
      <ul className={classes.notelists}>
        {currentProducts?.map((product) => {
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
      {/* Pagination controls */}
      <div>
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default ProductList;
