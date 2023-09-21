import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";
import useSyncValues from "../../hooks/useSyncValues";
import addToCartIcon from "../../assets/addShoppingCartIcon.svg";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  const [numberInCart, setNumberInCart] = useState(0); // For showing quantity on button

  const addToCart = (id) => {
    setCart((previous) => {
      const foundIndex = previous.findIndex((entry) => entry.id === id);

      if (foundIndex !== -1) {
        const updatedCart = [...previous];
        updatedCart[foundIndex].quantity += 1;
        return updatedCart;
      }

      return [...previous, { ...pokemonData, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((previous) => {
      const foundIndex = previous.findIndex((entry) => entry.id === id);

      if (foundIndex !== -1) {
        const updatedCart = [...previous];
        updatedCart[foundIndex].quantity -= 1;
        if (updatedCart[foundIndex].quantity <= 0) {
          updatedCart.splice(foundIndex, 1);
        }
        return updatedCart;
      }

      return previous;
    });
  };

  useSyncValues(
    cart.find((entry) => entry.id === pokemonData.id)?.quantity || 0,
    setNumberInCart
  );

  const handleAddClick = () => {
    addToCart(pokemonData.id);
  };

  const handleSubtractClick = () => {
    removeFromCart(pokemonData.id);
  };

  const handleKeyDownAddToCart = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      event.target.click();
    }
  };

  return (
    <div
      className={
        className
          ? styles.AddToCartButton + " " + className
          : styles.AddToCartButton
      }
    >
      {numberInCart <= 0 ? (
        <img
          src={addToCartIcon}
          alt="add to cart"
          onClick={handleAddClick}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDownAddToCart}
        />
      ) : (
        <>
          <p> x {numberInCart}</p>
          <button onClick={handleAddClick}>+</button>
          <button onClick={handleSubtractClick}>-</button>
        </>
      )}
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
