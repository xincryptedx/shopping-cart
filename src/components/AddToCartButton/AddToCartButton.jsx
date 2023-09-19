import styles from "./AddToCartButton.module.css";

const AddToCartButton = () => {
  return (
    <div className={styles.AddToCartButton}>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default AddToCartButton;
