import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

const AddToCartButton = ({ className, pokemonData, cart, setCart }) => {
  return (
    <div
      className={
        className
          ? styles.AddToCartButton + " " + className
          : styles.AddToCartButton
      }
    >
      <button>+</button>
      <button>-</button>
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
