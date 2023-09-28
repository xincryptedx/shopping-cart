import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";

const Menu = ({ className, menuOpen, setMenuOpen }) => {
  // Close Menu on escape key
  useSetStateOnKeydown("Escape", menuOpen, setMenuOpen, false);

  const onCancelIconKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.target.click();
    }
  };

  return (
    <section
      role="menu"
      className={className ? className + " " + styles.Menu : styles.Menu}
    >
      <img
        src={cancelIcon}
        alt="close menu"
        role="button"
        className={styles.cancelBtn}
        onClick={() => setMenuOpen(false)}
        onKeyDown={onCancelIconKeydown}
        tabIndex={menuOpen ? 0 : -1}
      />
      <ul aria-label="links">
        <li>
          <Link
            to="/"
            aria-label="Home"
            className={styles.productsBtn}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="products"
            aria-label="Pokemon Prizes"
            className={styles.productsBtn}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Pokemon Prizes
          </Link>
        </li>
        <li>
          <a href="https://github.com/xincryptedx/shopping-cart">Github</a>
        </li>
      </ul>
    </section>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
