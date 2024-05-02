import classes from "./AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7ez3nwSDxVksog08z6GLAB5JpmDuN48U",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      );
      if (response) {
        alert("Successfully Signed Up");
        history("/logIn");
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
      <h1>SIGN UP</h1>
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
            <button type="submit">Sign Up</button>
          ) : (
            <h5 style={{ color: "#3b0262" }}>Signing In...</h5>
          )}

          <Link to="/logIn" className={classes.toggle}>
            Login with existing account
          </Link>
        </div>
      </form>
    </section>
  );
};
export default SignUp;
