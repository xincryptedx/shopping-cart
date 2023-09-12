import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import PropTypes from "prop-types";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";

const ShoppingCart = ({ className, shoppingCartOpen, setShoppingCartOpen }) => {
  // Close ShoppingCart on escape
  useSetStateOnKeydown("Escape", shoppingCartOpen, setShoppingCartOpen, false);

  return (
    <section
      role="dialog"
      aria-labelledby="title"
      className={
        className ? className + " " + styles.ShoppingCart : styles.ShoppingCart
      }
    >
      <img
        src={cancelIcon}
        alt="close cart"
        role="button"
        className={styles.cancelBtn}
        onClick={() => setShoppingCartOpen(false)}
      />
      <h1 id="title">Cart</h1>
    </section>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string,
  shoppingCartOpen: PropTypes.bool.isRequired,
  setShoppingCartOpen: PropTypes.func.isRequired,
};

export default ShoppingCart;
