import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";
import { useEffect } from "react";

const NavLinks = ({ className, navLinksOpen, setNavLinksOpen }) => {
  useEffect(() => {
    const closeNavLinks = (event) => {
      const key = event;
      if (key === "escape") {
        setNavLinksOpen(false);
      }
    };
    if (navLinksOpen) {
      document.addEventListener("keydown", (e) => closeNavLinks(e));
    } else {
      document.removeEventListener("keydown", (e) => closeNavLinks(e));
    }

    return () => {
      document.removeEventListener("keydown", (e) => closeNavLinks(e));
    };
  }, [navLinksOpen, setNavLinksOpen]);

  return (
    <aside
      className={
        className ? className + " " + styles.NavLinks : styles.NavLinks
      }
    >
      <img
        src={cancelIcon}
        alt="cancel button"
        className={styles.cancelBtn}
        onClick={() => setNavLinksOpen(false)}
      />
      <ul>
        <Link
          to="products"
          className={styles.productsBtn}
          onFocus={() => setNavLinksOpen(true)}
          onClick={() => setNavLinksOpen(false)}
        >
          Prize Counter
        </Link>
      </ul>
    </aside>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavLinks;
