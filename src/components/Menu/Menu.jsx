import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";

const Menu = ({ className, navLinksOpen, setNavLinksOpen }) => {
  // Close NavLinks on escape key
  useSetStateOnKeydown("Escape", navLinksOpen, setNavLinksOpen, false);

  const onCancelIconKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.target.click();
    }
  };

  return (
    <section
      role="menu"
      className={
        className ? className + " " + styles.NavLinks : styles.NavLinks
      }
    >
      <img
        src={cancelIcon}
        alt="close menu"
        role="button"
        className={styles.cancelBtn}
        onClick={() => setNavLinksOpen(false)}
        onKeyDown={onCancelIconKeydown}
        tabIndex={navLinksOpen ? 0 : -1}
      />
      <ul aria-label="links">
        <Link
          to="products"
          aria-label="prize counter"
          className={styles.productsBtn}
          onClick={() => setNavLinksOpen(false)}
          tabIndex={navLinksOpen ? 0 : -1}
        >
          Prize Counter
        </Link>
      </ul>
    </section>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  navLinksOpen: PropTypes.bool.isRequired,
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default Menu;
