import "./App.css";
import LogIn from "./Authentication/LogIn";
import SignUp from "./Authentication/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductForm from "./AddProduct/ProductForm";
import ProductList from "./Product/ProductList";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
function App() {
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
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
