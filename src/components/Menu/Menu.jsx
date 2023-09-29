import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import cancelIcon from "../../assets/cancel.svg";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";

const Menu = ({
  className,
  menuOpen,
  setMenuOpen,
  region,
  setRegion,
  setStockRefreshTrigger,
  setNextUpdate,
}) => {
  // Close Menu on escape key
  useSetStateOnKeydown("Escape", menuOpen, setMenuOpen, false);

  const onCancelIconKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.target.click();
    }
  };

  const onRegionClick = (region) => {
    setRegion(region);
    setStockRefreshTrigger(true);

    const hourTimeout = 60 * 60 * 1000; // 60m 60s 1000ms
    const currentTime = new Date();
    setNextUpdate(new Date(currentTime.getTime() + hourTimeout));

    setMenuOpen(false);
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
      <h1 className={styles.title}>Menu</h1>
      <ul aria-label="links" className={styles.links}>
        <li>
          <Link
            to="/"
            aria-label="Home"
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

      <div className={styles.regionButtons}>
        <h1>Region</h1>
        <button
          className={region === "kanto" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("kanto")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Kanto
        </button>
        <button
          className={region === "original-johto" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("original-johto")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Johto
        </button>
        <button
          className={region === "hoenn" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("hoenn")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Hoenn
        </button>
        <button
          className={region === "original-sinnoh" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("original-sinnoh")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Sinnoh
        </button>
        <button
          className={region === "original-unova" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("original-unova")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Unova
        </button>
        <button
          className={region === "updated-alola" ? styles.selectedRegion : ""}
          onClick={() => onRegionClick("updated-alola")}
          tabIndex={menuOpen ? 0 : -1}
        >
          Alola
        </button>
      </div>
    </section>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
  setStockRefreshTrigger: PropTypes.func.isRequired,
  setNextUpdate: PropTypes.func.isRequired,
};

export default Menu;
