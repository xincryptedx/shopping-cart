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

  // If loading show dummy deck
  if (pokemonLoading) {
    return <p>Loading...</p>;
  }

  // If error show error message
  if (pokemonError) {
    return (
      <>
        <p>An error occured.</p>
        {pokemonError ? (
          <p>Pokemon Load Error: {pokemonError.toString()} </p>
        ) : null}
      </>
    );
  }

  // If all data loaded show deck with cards for each prepared pokemon
  return (
    <div className={styles.productsRoute}>
      <SortAndFilter />
      <ProductDeck />
    </div>
  );
};

export default Products;
