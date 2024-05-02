import classes from "./AuthForm.module.css";

const SignUp = () => {
  return (
    <section className={classes.auth}>
      <h1>SIGN UP</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button type="submit">Sign Up</button>

          <button type="button" className={classes.toggle}>
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};
export default SignUp;
