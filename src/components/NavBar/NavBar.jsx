import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import menuIcon from "../../assets/menuIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import PropTypes from "prop-types";

const NavBar = ({ setNavLinksOpen, setShoppingCartOpen }) => {
  const toggleNavLinksOpen = (event) => {
    event.stopPropagation();
    setNavLinksOpen((previous) => !previous);
  };

  const handleKeyDownMenuIcon = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      setNavLinksOpen(true);
    }
  };

  const toggleShoppingCartOpen = (event) => {
    event.stopPropagation();
    setShoppingCartOpen((previous) => !previous);
  };

  const handleKeyDownShoppingCartIcon = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      setShoppingCartOpen(true);
    }
  };

  return (
    <nav className={styles.NavBar}>
      <img
        src={menuIcon}
        alt="links menu button"
        className={styles.menuBtn}
        tabIndex="0"
        onClick={toggleNavLinksOpen}
        onKeyDown={handleKeyDownMenuIcon}
      />

      <Link to="/" className={styles.homeBtn}>
        <img src={logoSmall} alt="Rocket Game Corner home button" />
      </Link>

      <img
        src={cartIcon}
        alt="cart icon button"
        className={styles.cartBtn}
        tabIndex="0"
        onClick={toggleShoppingCartOpen}
        onKeyDown={handleKeyDownShoppingCartIcon}
      />
    </nav>
  );
};

NavBar.propTypes = {
  setShoppingCartOpen: PropTypes.func.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavBar;
