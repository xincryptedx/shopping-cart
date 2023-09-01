import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const NavBar = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavLinksOpen = (event) => {
    event.stopPropagation();
    setNavLinksOpen((previous) => !previous);
  };

  const closeNavLinks = () => {
    setNavLinksOpen(false);
  };

  useClickOutside(menuRef, navLinksOpen, closeNavLinks);

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
        ref={menuRef}
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

export default NavBar;
