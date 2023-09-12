import styles from "./ProductCard.module.css";
import pokedollar from "../../assets/pokedollarIcon.svg";
import PropTypes from "prop-types";

const ProductCard = ({ pokemonData }) => {
  return (
    <div className={styles.ProductCard}>
      <img src="" alt="" className={styles.image} />
      <p className={styles.name}>Crabominable</p>
      <p className={styles.price}>1,000</p>
      <img
        src={pokedollar}
        alt="pokedollar sign"
        className={styles.pokedollar}
      />
    </div>
  );
};

ProductCard.propTypes = {
  pokemonData: PropTypes.object,
};

export default ProductCard;
