import classes from "./Navbar.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const dispatch = useDispatch();
  const logOutHandle = () => {
    dispatch(authActions.logOut());
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E Commerce</div>
      <nav>
        <ul>
          {!IsLoggedIn && (
            <Link to="/logIn" className={classes.link}>
              <li>Log In</li>
            </Link>
          )}
          {!IsLoggedIn && (
            <Link to="/" className={classes.link}>
              <li>Sign Up</li>
            </Link>
          )}

          {IsLoggedIn && (
            <Link to="/product">
              <li>Products</li>
            </Link>
          )}
          {IsLoggedIn && (
            <Link to="/addProduct">
              <li>Add Product</li>
            </Link>
          )}

          {IsLoggedIn && (
            <li>
              <button onClick={logOutHandle}>Log 0ut</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
