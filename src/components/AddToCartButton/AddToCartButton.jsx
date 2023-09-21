import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  const [numberInCart, setNumberInCart] = useState(0);

  const updateCart = () => {
    // Update the cart state to reflect new quantity using id
  };

  const handleAddClick = () => {
    setNumberInCart((previous) => previous + 1);
    updateCart();
  };

  const handleSubtractClick = () => {
    setNumberInCart((previous) => previous - 1);
    updateCart();
  };

  return (
    <div
      className={
        className
          ? styles.AddToCartButton + " " + className
          : styles.AddToCartButton
      }
    >
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleSubtractClick}>-</button>
    </div>
  );
};

AddToCartButton.propTypes = {
  className: PropTypes.string,
  pokemonData: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};

export default AddToCartButton;
