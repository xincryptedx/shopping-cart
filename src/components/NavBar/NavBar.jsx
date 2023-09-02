import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import PropTypes from "prop-types";

const NavBar = ({ setNavLinksOpen }) => {
  const toggleNavLinksOpen = (event) => {
    event.stopPropagation();
    setNavLinksOpen((previous) => !previous);
  };

  return (
    <nav className={styles.NavBar}>
      <button className={styles.menuBtn} onClick={(e) => toggleNavLinksOpen(e)}>
        Menu
      </button>
      <Link to="/" className={styles.homeBtn}>
        <img src={logoSmall} alt="Rocket Game Corner home button" />
      </Link>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

NavBar.propTypes = {
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavBar;
