import styles from "./ProductCard.module.css";
import pokedollar from "../../assets/pokedollarIcon.svg";
import PropTypes from "prop-types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductCard = ({ pokemonData, cart, setCart }) => {
  const capName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);

  return (
    <div className={styles.ProductCard}>
      <img
        src={pokemonData.image}
        alt={pokemonData.name}
        className={styles.image}
      />

      <p className={styles.name}>{capName}</p>

      <AddToCartButton
        className={styles.AddToCartButton}
        cart={cart}
        setCart={setCart}
      />

      <img
        src={pokedollar}
        alt="pokedollar sign"
        className={styles.pokedollar}
      />
      <p className={styles.price}>{pokemonData.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  pokemonData: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};

export default ProductCard;
