import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import PropTypes from "prop-types";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ShoppingCart = ({
  className,
  shoppingCartOpen,
  setShoppingCartOpen,
  cart,
  setCart,
}) => {
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
      <h1 id="title" className={styles.title}>
        Cart
      </h1>
      <div className={styles.cartItemContainer}>
        {cart.map((entry) => {
          return (
            <div key={entry.id} className={styles.cartItem}>
              <p className={styles.itemName}>{entry.name}</p>
              <AddToCartButton
                className={styles.addToCartButton}
                pokemonData={entry}
                cart={cart}
                setCart={setCart}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string,
  shoppingCartOpen: PropTypes.bool.isRequired,
  setShoppingCartOpen: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
