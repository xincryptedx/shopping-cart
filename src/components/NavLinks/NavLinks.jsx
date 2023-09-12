import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";
import { useRef } from "react";
import useSetFocusOnStateChange from "../../hooks/useSetFocusOnStateChange";

const NavLinks = ({ className, navLinksOpen, setNavLinksOpen }) => {
  // Close NavLinks on escape key
  useSetStateOnKeydown("Escape", navLinksOpen, setNavLinksOpen, false);

  // Set focus on first link when opened
  const firstLink = useRef(null);
  useSetFocusOnStateChange(firstLink.current, navLinksOpen, true);

  return (
    <section
      className={
        className ? className + " " + styles.NavLinks : styles.NavLinks
      }
    >
      <img
        src={cancelIcon}
        alt="close"
        role="button"
        className={styles.cancelBtn}
        onClick={() => setNavLinksOpen(false)}
      />
      <ul>
        <Link
          to="products"
          aria-label="prize counter"
          className={styles.productsBtn}
          ref={firstLink}
          onFocus={() => setNavLinksOpen(true)}
          onClick={() => setNavLinksOpen(false)}
        >
          Prize Counter
        </Link>
      </ul>
    </section>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavLinks;
