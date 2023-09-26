import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";
import useSyncValues from "../../hooks/useSyncValues";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  const [numberInCart, setNumberInCart] = useState(0);
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const maxQuantity = 99;

  const updateCartWithQuantity = (newQuantity) => {
    setCart((previous) => {
      const foundIndex = previous.findIndex(
        (entry) => entry.id === pokemonData.id
      );
      // Entry exists
      if (foundIndex !== -1) {
        const updatedCart = [...previous];
        if (newQuantity === 0 || newQuantity.toString().trim() === "") {
          updatedCart.splice(foundIndex, 1);
        } else {
          updatedCart[foundIndex].quantity = newQuantity;
        }
        return updatedCart;
      }
      // Entry does not exist
      if (newQuantity > 0) {
        return [...previous, { ...pokemonData, quantity: newQuantity }];
      }

      return previous;
    });
  };

  const addOneToCart = (id) => {
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

  const removeOneFromCart = (id) => {
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

  useSyncValues(numberInCart, setInputValue);

  const onAddClick = () => {
    addOneToCart(pokemonData.id);
  };

  const onSubtractClick = () => {
    removeOneFromCart(pokemonData.id);
  };

  const onLabelKeydown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      setInputOpen(true);
    }
  };

  const onLabelClick = () => {
    setInputOpen(true);
    setInputValue(numberInCart);
  };

  const onInputKeydown = (event) => {
    const { key } = event;

    if (key === "Enter") {
      event.preventDefault();
      updateCartWithQuantity(inputValue);
      setInputOpen(false);
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

  const onInputFocus = (event) => {
    event.target.select();
  };

  const onInputBlur = () => {
    setInputOpen(false);
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
        <button onClick={onAddClick} className={styles.initialButton}>
          Add to Cart
        </button>
      ) : (
        <>
          <button onClick={onSubtractClick} className={styles.subtractButton}>
            -
          </button>
          {inputOpen ? (
            <input
              id="quantity"
              type="text"
              inputMode="numeric"
              className={styles.quantityInput}
              value={inputValue}
              onChange={onInputValueChange}
              onKeyDown={onInputKeydown}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              autoFocus
            />
          ) : (
            <p
              className={styles.quantityLabel}
              role="button"
              aria-label="show input"
              tabIndex={0}
              onClick={onLabelClick}
              onKeyDown={onLabelKeydown}
            >
              x {numberInCart.toString().padStart(2, "0")}
            </p>
          )}

          <button onClick={onAddClick} className={styles.addButton}>
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
