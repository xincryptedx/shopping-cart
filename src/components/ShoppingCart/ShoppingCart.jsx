import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import PropTypes from "prop-types";

const ShoppingCart = ({ className, setShoppingCartOpen }) => {
  return (
    <aside
      className={
        className ? className + " " + styles.ShoppingCart : styles.ShoppingCart
      }
    >
      <img
        src={cancelIcon}
        alt="cancel button"
        className={styles.cancelBtn}
        onClick={() => setShoppingCartOpen(false)}
      />
      <div>This is a shopping cart div!</div>
    </aside>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string,
  setShoppingCartOpen: PropTypes.func.isRequired,
};

export default ShoppingCart;
