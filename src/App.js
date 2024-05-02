import './App.css';
import LogIn from './Authentication/LogIn';
import SignUp from './Authentication/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/logIn" element={<LogIn />} />
     <Route path="/product" element={<Home />} />
     <Route path="*" element={<h1>Path not resolved...</h1>} />
     </Routes>
    </div>
  );
}

export default App;
