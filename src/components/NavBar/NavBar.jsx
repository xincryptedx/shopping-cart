import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import { useRef } from "react";
import PropTypes from "prop-types";
import useClickOutside from "../../hooks/useClickOutside";

const NavBar = ({ navLinksOpen, setNavLinksOpen }) => {
  const linksRef = useRef(null);

  const toggleNavLinksOpen = (event) => {
    event.stopPropagation();
    setNavLinksOpen((previous) => !previous);
  };

  const closeNavLinks = () => {
    setNavLinksOpen(false);
  };

  // Closes nav links by setting state when click outside of div
  useClickOutside(linksRef, navLinksOpen, closeNavLinks);

  return (
    <nav className={styles.NavBar}>
      <button className={styles.menuBtn} onClick={(e) => toggleNavLinksOpen(e)}>
        Menu
      </button>
      <div
        className={
          navLinksOpen
            ? styles.navLinksOpen + " " + styles.navLinks
            : styles.navLinks
        }
        ref={linksRef}
      >
        <ul>
          <Link
            to="products"
            className={styles.productsBtn}
            onFocus={() => setNavLinksOpen(true)}
            onBlur={() => setNavLinksOpen(false)}
          >
            Prize Counter
          </Link>
        </ul>
      </div>
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
