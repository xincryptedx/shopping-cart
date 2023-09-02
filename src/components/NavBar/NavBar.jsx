import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import menuIcon from "../../assets/menuIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import PropTypes from "prop-types";

const NavBar = ({ setNavLinksOpen }) => {
  const toggleNavLinksOpen = (event) => {
    event.stopPropagation();
    setNavLinksOpen((previous) => !previous);
  };

  return (
    <nav className={styles.NavBar}>
      <img
        src={menuIcon}
        alt="links menu button"
        className={styles.menuBtn}
        tabIndex="0"
        onClick={(e) => toggleNavLinksOpen(e)}
      />

      <Link to="/" className={styles.homeBtn}>
        <img src={logoSmall} alt="Rocket Game Corner home button" />
      </Link>
      <img
        src={cartIcon}
        alt="cart icon button"
        className={styles.cartBtn}
        tabIndex="0"
      />
    </nav>
  );
};

NavBar.propTypes = {
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavBar;
