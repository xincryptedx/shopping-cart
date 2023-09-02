import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import PropTypes from "prop-types";

const NavLinks = ({ setNavLinksOpen }) => {
  return (
    <aside>
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
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default NavLinks;
