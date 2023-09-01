import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import { useState } from "react";

const NavBar = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);

  const toggleNavLinksOpen = () => {
    setNavLinksOpen((previous) => !previous);
  };

  return (
    <nav className={styles.NavBar}>
      <button className={styles.menuBtn} onClick={toggleNavLinksOpen}>
        Menu
      </button>
      <div
        className={
          navLinksOpen
            ? styles.navLinksOpen + " " + styles.navLinks
            : styles.navLinks
        }
      >
        <ul>
          <Link to="products" className={styles.productsBtn}>
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

export default NavBar;
