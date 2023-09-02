import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import PropTypes from "prop-types";

const NavLinks = ({ className, setNavLinksOpen }) => {
  return (
    <aside className={className}>
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
    </aside>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavLinks;
