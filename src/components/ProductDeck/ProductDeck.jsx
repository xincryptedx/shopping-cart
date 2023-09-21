import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductDeck.module.css";
import PropTypes from "prop-types";

const ProductDeck = ({ pokemonData, cart, setCart }) => {
  return (
    <section className={styles.ProductDeck}>
      {pokemonData.map((entry) => {
        return (
          <ProductCard
            pokemonData={entry}
            key={entry.id}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </section>
  );
};

ProductDeck.propTypes = {
  pokemonData: PropTypes.arrayOf(PropTypes.object),
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};

export default ProductDeck;
