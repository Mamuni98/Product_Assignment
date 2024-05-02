import classes from "./AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();
  const dispatch = useDispatch();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const email = emailRef.current.value;
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7ez3nwSDxVksog08z6GLAB5JpmDuN48U",
        {
          email: email,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      );
      if (response) {
        const token = response.data.idToken;
        localStorage.setItem("email", email);
        dispatch(authActions.logIn(token));
        alert("Successfully Logged In");
        history("/product");
      }
    } catch (err) {
      const alertmsg = err.response.data.error.message;
      alert(alertmsg);
    }
    setIsLoading(false);
    e.target.reset();
  };

  return (
    <section className={classes.auth}>
      <h1>LOG IN</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="youremail@email.com"
            minLength={11}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="password"
            minLength={6}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading ? (
            <button type="submit">Log In</button>
          ) : (
            <h5 style={{ color: "#3b0262" }}>Logging In...</h5>
          )}

          <Link to="/" className={classes.toggle}>
            Create new account
          </Link>
        </div>
      </form>
    </section>
  );
};
export default LogIn;
