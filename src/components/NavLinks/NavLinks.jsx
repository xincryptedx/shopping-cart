import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";

const NavLinks = ({ className, setNavLinksOpen }) => {
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
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavLinks;
