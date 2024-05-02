import classes from "./AuthForm.module.css";

const LogIn = () => {
  return (
    <section className={classes.auth}>
      <h1>LOG IN</h1>
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
          <button type="submit">Log In</button>

          <button type="button" className={classes.toggle}>
           Create new account
          </button>
        </div>
      </form>
    </section>
  );
};
export default LogIn;
