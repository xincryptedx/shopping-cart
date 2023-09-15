import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductDeck.module.css";
import PropTypes from "prop-types";

const ProductDeck = ({ pokemonData }) => {
  return (
    <section className={styles.ProductDeck}>
      {pokemonData.map((entry) => {
        return <ProductCard pokemonData={entry} key={entry.id} />;
      })}
    </section>
  );
};

ProductDeck.propTypes = {
  pokemonData: PropTypes.arrayOf(PropTypes.object),
};

export default ProductDeck;
