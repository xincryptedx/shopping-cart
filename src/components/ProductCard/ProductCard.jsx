import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      <img src="" alt="" className={styles.image} />
      <p className={styles.name}>Crabominable</p>
      <p className={styles.price}>Price</p>
    </div>
  );
};

export default ProductCard;
