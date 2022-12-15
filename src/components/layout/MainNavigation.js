import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LOGO from "../../assets/LOGO.png";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great REVIEW</div>
      <img src={LOGO} alt="Logo" className={classes.logoImg} />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/reviews"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-review"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add your review
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
