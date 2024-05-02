import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E Commerce</div>
      <nav>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
          <li>
            <button>Log 0ut</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
