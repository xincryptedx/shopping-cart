import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductDeck.module.css";
import PropTypes from "prop-types";

const ProductDeck = ({
  pokemonData,
  cart,
  setCart,
  shoppingCartOpen,
  menuOpen,
}) => {
  return (
    <section className={styles.ProductDeck}>
      {pokemonData.map((entry) => {
        return (
          <ProductCard
            pokemonData={entry}
            key={entry.id}
            cart={cart}
            setCart={setCart}
            shoppingCartOpen={shoppingCartOpen}
            menuOpen={menuOpen}
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
  shoppingCartOpen: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default ProductDeck;
