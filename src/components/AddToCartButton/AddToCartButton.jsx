import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  const [numberInCart, setNumberInCart] = useState(0); // For showing quantity on button

  const addToCart = (id) => {
    // Check if cart has an entry for the item yet
    const foundEntry = cart.find((entry) => entry.id === id);
    // If it does, increment the quantity prop, else create the entry with qauantity one
    if (foundEntry) {
      // Increment quantity property
    } else {
      // Create entry with quantity one
    }
  };

  const removeFromCart = (id) => {
    // Check if cart has an entry for the item yet
    const foundEntry = cart.find((entry) => entry.id === id);
    // If the entry is found decrement its quantity
    if (foundEntry) {
      // Decrement quantity
    }
    // If quantity is >= 0 remove the whole cart entry
    if (foundEntry && foundEntry.quantity >= 0) {
      // Remove the entry from cart
    }
  };

  // Custom hook that updates numberInCart

  const handleAddClick = () => {
    addToCart(pokemonData.id);
  };

  const handleSubtractClick = () => {
    removeFromCart(pokemonData.id);
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
