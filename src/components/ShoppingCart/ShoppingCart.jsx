import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import pokedollarIcon from "../../assets/pokedollarIcon.svg";
import PropTypes from "prop-types";
import useSetStateOnKeydown from "../../hooks/useSetStateOnKeydown";
import useTotalInCart from "../../hooks/useTotalInCart";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ShoppingCart = ({
  className,
  shoppingCartOpen,
  setShoppingCartOpen,
  cart,
  setCart,
  totalCartPrice,
}) => {
  // Close ShoppingCart on escape
  useSetStateOnKeydown("Escape", shoppingCartOpen, setShoppingCartOpen, false);

  const totalInCart = useTotalInCart(cart);

  const onCancelIconKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.target.click();
    }
  };

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
        tabIndex={shoppingCartOpen ? 0 : -1}
        onClick={() => setShoppingCartOpen(false)}
        onKeyDown={onCancelIconKeydown}
      />
      <h1 id="title" className={styles.title}>
        Cart
      </h1>
      {totalInCart > 0 ? (
        <>
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
                    tabIndex={shoppingCartOpen ? 0 : -1}
                  />
                  <p className={styles.lineTotal}>
                    <img src={pokedollarIcon} alt="pokedollar" />{" "}
                    {(entry.price * entry.quantity).toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
          <p className={styles.cartTotal}>
            Total: <img src={pokedollarIcon} alt="pokedollar" />
            {totalCartPrice.toLocaleString()}
          </p>
          <button
            className={styles.checkoutButton}
            tabIndex={shoppingCartOpen ? 0 : -1}
          >
            Checkout
          </button>
          <p className={styles.checkoutError}>Service Unavailable</p>
        </>
      ) : (
        <p className={styles.emptyCartMessage}>Nothing in cart.</p>
      )}
    </section>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string,
  shoppingCartOpen: PropTypes.bool.isRequired,
  setShoppingCartOpen: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
  totalCartPrice: PropTypes.number.isRequired,
};

export default ShoppingCart;
