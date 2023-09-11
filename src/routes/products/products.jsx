import { useState } from "react";
import ProductDeck from "../../components/ProductDeck/ProductDeck";
import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import styles from "./products.module.css";

const Products = () => {
  const [region, setRegion] = useState("kanto");
  // Fetch pokemon data for given generation
  const {
    pokemon,
    loading: pokemonLoading,
    error: pokemonError,
  } = useFetchPokemon(region);

  // Prepare pokemon data

  // If loading show dummy deck

  // If error show error message

  // If all data loaded show deck with cards for each prepared pokemon
  return (
    <div className={styles.productsRoute}>
      <SortAndFilter />
      <ProductDeck />
    </div>
  );
};

export default Products;
