import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";
import useSyncValues from "../../hooks/useSyncValues";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  const [numberInCart, setNumberInCart] = useState(0);
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const maxQuantity = 99;

  const addToCart = (id) => {
    setCart((previous) => {
      const foundIndex = previous.findIndex((entry) => entry.id === id);

      if (foundIndex !== -1) {
        const updatedCart = [...previous];
        updatedCart[foundIndex].quantity = Math.min(
          updatedCart[foundIndex].quantity + 1,
          maxQuantity
        );
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

  const handleLabelKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      setInputOpen(true);
    }
  };

  const onInputKeydown = (event) => {
    const { key } = event;

    if (key === "Enter") {
      event.preventDefault();
      // Set state for quantity
    }
    if (key === "Escape") {
      setInputOpen(false);
    }
  };

  const onInputValueChange = (event) => {
    setInputValue((previous) => {
      const { value: newValue } = event.target;

      if (newValue.length > 2) return previous;

      const replacedValue = newValue.replace(/\D/g, "");
      const clampedValue = Math.max(
        0,
        Math.min(maxQuantity, parseInt(replacedValue))
      );
      const finalValue = isNaN(clampedValue) ? "" : clampedValue;

      return finalValue;
    });
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
        <button onClick={handleAddClick} className={styles.initialButton}>
          Add to Cart
        </button>
      ) : (
        <>
          <button
            onClick={handleSubtractClick}
            className={styles.subtractButton}
          >
            -
          </button>
          {inputOpen ? (
            <input
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={onInputValueChange}
              onKeyDown={onInputKeydown}
            />
          ) : (
            <p
              className={styles.quantity}
              role="button"
              aria-label="show input"
              tabIndex={0}
              onClick={() => setInputOpen(true)}
              onKeyDown={handleLabelKeydown}
            >
              x {numberInCart.toString().padStart(2, "0")}
            </p>
          )}

          <button onClick={handleAddClick} className={styles.addButton}>
            +
          </button>
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
