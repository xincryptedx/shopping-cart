import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      <p>Pokemon Picture</p>
      <p>Pokemon Name</p>
      <p>Price</p>
    </div>
  );
};

export default ProductCard;
