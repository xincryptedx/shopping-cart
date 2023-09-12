import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductDeck.module.css";
import PropTypes from "prop-types";

const ProductDeck = ({ pokemon }) => {
  return (
    <section className={styles.ProductDeck}>
      {pokemon.map((entry) => {
        return <ProductCard pokemonData={entry} key={entry.id} />;
      })}
    </section>
  );
};

ProductDeck.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
};

export default ProductDeck;
