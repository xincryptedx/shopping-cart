import styles from "./ProductCard.module.css";
import pokedollar from "../../assets/pokedollarIcon.svg";
import PropTypes from "prop-types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import maleIcon from "../../assets/maleIcon.svg";
import femaleIcon from "../../assets/femaleIcon.svg";
import agenderIcon from "../../assets/agenderIcon.svg";

const ProductCard = ({
  pokemonData,
  cart,
  setCart,
  shoppingCartOpen,
  menuOpen,
}) => {
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

      <img
        src={
          pokemonData.gender === "male"
            ? maleIcon
            : pokemonData.gender === "female"
            ? femaleIcon
            : agenderIcon
        }
        alt={
          pokemonData.gender === "male"
            ? "male"
            : pokemonData.gender === "female"
            ? "female"
            : "agender"
        }
        className={styles.gender}
      ></img>

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
        tabIndex={shoppingCartOpen || menuOpen ? -1 : 0}
      />
    </div>
  );
};

ProductCard.propTypes = {
  pokemonData: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
  shoppingCartOpen: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default ProductCard;
