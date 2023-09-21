import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

const AddToCartButton = ({ className }) => {
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
};

export default AddToCartButton;