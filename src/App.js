import "./App.css";
import { useEffect } from "react";
import axios from "axios";
//import jsonData from "./data/dummyData.json";
import LogIn from "./Authentication/LogIn";
import SignUp from "./Authentication/SignUp";
import { productActions } from "./store/products";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductForm from "./AddProduct/ProductForm";
import ProductList from "./Product/ProductList";
import Navbar from "./Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://productsassignment-default-rtdb.firebaseio.com/products.json"
        );
        const data = Object.values(response.data);
        dispatch(productActions.saveFinalList(data[0]));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const useremail = localStorage.getItem("email");
    if (useremail) {
      const user = useremail.replace("@", "").replace(".", "");

      const finalDataFromDataBase = async () => {
        try {
          const response = await axios.get(
            `https://productsassignment-default-rtdb.firebaseio.com/${user}.json`
          );
          console.log(response.data);
          if(response.data){
            dispatch(productActions.saveFinalList(response.data.userProducts));
          }
        } catch (error) {
          console.log(error);
        }
      };
      finalDataFromDataBase();
    }
  }, [IsLoggedIn, dispatch]);

  return (
    <div className="App">
      <main>
        <Navbar />
      </main>
      <Routes>
        {!IsLoggedIn && <Route path="/" element={<SignUp />} />}
        {!IsLoggedIn && <Route path="/logIn" element={<LogIn />} />}
        <Route
          path="/product"
          element={
            IsLoggedIn ? <ProductList /> : <Navigate replace to="/logIn" />
          }
        />
        <Route
          path="/addProduct"
          element={
            IsLoggedIn ? <ProductForm /> : <Navigate replace to="/logIn" />
          }
        />
        <Route path="*" element={<h1>Path not resolved...</h1>} />
      </Routes>
    </div>
  );
}

export default App;
