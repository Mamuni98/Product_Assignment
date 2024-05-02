import './App.css';
import LogIn from './Authentication/LogIn';
import SignUp from './Authentication/SignUp';
import { Routes, Route } from 'react-router-dom';
import ProductForm from './AddProduct/ProductForm';
import ProductList from './Product/ProductList';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
      </main>
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/logIn" element={<LogIn />} />
     <Route path="/product" element={<ProductList />} />
     <Route path="/addProduct" element={<ProductForm/>} />
     <Route path="*" element={<h1>Path not resolved...</h1>} />
     </Routes>
    </div>
  );
}

export default App;
