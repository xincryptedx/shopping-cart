import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <section className={styles.ProductCard}>
      <p>Pokemon Picture</p>
      <p>Pokemon Name</p>
      <p>Price</p>
    </section>
  );
};

export default ProductCard;
