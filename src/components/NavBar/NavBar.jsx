import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";
import menuIcon from "../../assets/menuIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import PropTypes from "prop-types";
import useTotalInCart from "../../hooks/useTotalInCart";

const NavBar = ({ setMenuOpen, setShoppingCartOpen, cart }) => {
  const totalInCart = useTotalInCart(cart);
  const maxTotalCount = 99;

  const toggleMenuOpen = (event) => {
    event.stopPropagation();
    setMenuOpen((previous) => !previous);
  };

  const handleKeyDownMenuIcon = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      setMenuOpen(true);
    }
  };

  const handleKeyDownHomeIcon = (event) => {
    const { key } = event;
    if (key === " ") {
      event.preventDefault();
      event.target.click();
    }
  };

  const toggleShoppingCartOpen = (event) => {
    event.stopPropagation();
    setShoppingCartOpen((previous) => !previous);
  };

  const handleKeyDownShoppingCartIcon = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      setShoppingCartOpen(true);
    }
  };

  return (
    <nav className={styles.NavBar}>
      <img
        src={menuIcon}
        alt="open menu"
        role="button"
        tabIndex="0"
        className={styles.menuBtn}
        onClick={toggleMenuOpen}
        onKeyDown={handleKeyDownMenuIcon}
      />

      <Link to="/" className={styles.homeBtn} onKeyDown={handleKeyDownHomeIcon}>
        <img src={logoSmall} alt="home" />
      </Link>

      <div
        role="button"
        tabIndex="0"
        className={styles.cartBtn}
        onClick={toggleShoppingCartOpen}
        onKeyDown={handleKeyDownShoppingCartIcon}
        aria-label={`Shopping Cart: ${totalInCart} items`}
      >
        <img src={cartIcon} alt="cart" />
        {totalInCart > 0 ? (
          <p className={styles.cartQuantity}>
            {totalInCart <= maxTotalCount ? totalInCart : `${maxTotalCount}+`}
          </p>
        ) : null}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setShoppingCartOpen: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
