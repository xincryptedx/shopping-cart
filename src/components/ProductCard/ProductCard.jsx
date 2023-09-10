import styles from "./ProductCard.module.css";
import pokedollar from "../../assets/pokedollarIcon.svg";

const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      <img src="" alt="" className={styles.image} />
      <p className={styles.name}>Crabominable</p>
      <p className={styles.price}>Price</p>
      <img
        src={pokedollar}
        alt="pokedollar sign"
        className={styles.pokedollar}
      />
    </div>
  );
};

export default ProductCard;
