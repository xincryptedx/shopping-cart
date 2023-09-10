import { useState } from "react";
import ProductDeck from "../../components/ProductDeck/ProductDeck";
import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import styles from "./products.module.css";

const Products = () => {
  const [generation, setGeneration] = useState(1);
  // Fetch pokemon data for given generation
  const {
    pokemon,
    loading: pokemonLoading,
    error: pokemonError,
  } = useFetchPokemon(generation);

  // Prepare pokemon data

  return (
    <div className={styles.productsRoute}>
      <SortAndFilter />
      <ProductDeck />
    </div>
  );
};

export default Products;
