import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import pokedollarIcon from "../../assets/pokedollarIcon.svg";
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
              <p className={styles.itemName}>
                {entry.name[0].toUpperCase() + entry.name.slice(1)}
              </p>
              <AddToCartButton
                className={styles.addToCartButton}
                pokemonData={entry}
                cart={cart}
                setCart={setCart}
              />
              <p className={styles.lineTotal}>
                <img src={pokedollarIcon} alt="pokedollar" />{" "}
                {(entry.price * entry.quantity).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
      <p className={styles.cartTotal}>Total: </p>
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
