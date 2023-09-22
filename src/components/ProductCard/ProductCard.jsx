import styles from "./ProductCard.module.css";
import pokedollar from "../../assets/pokedollarIcon.svg";
import PropTypes from "prop-types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import maleIcon from "../../assets/maleIcon.svg";
import femaleIcon from "../../assets/femaleIcon.svg";
import agenderIcon from "../../assets/agenderIcon.svg";

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

      <p className={styles.level}>Lv. {pokemonData.level}</p>

      {pokemonData.gender === "male" ? (
        <img src={maleIcon} alt="male"></img>
      ) : pokemonData.gender === "female" ? (
        <img src={femaleIcon} alt="female"></img>
      ) : (
        <img src={agenderIcon} alt="agender"></img>
      )}

      <img
        src={pokedollar}
        alt="pokedollar sign"
        className={styles.pokedollar}
      />
      <p className={styles.price}>{pokemonData.price}</p>

      <AddToCartButton
        className={styles.AddToCartButton}
        pokemonData={pokemonData}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

ProductCard.propTypes = {
  pokemonData: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};

export default ProductCard;
