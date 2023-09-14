import { useState } from "react";
import ProductDeck from "../../components/ProductDeck/ProductDeck";
import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import useFetchPokedex from "../../hooks/useFetchPokedex";
import styles from "./products.module.css";
import usePreparePokemonData from "../../hooks/usePreparePokemonData";

const Products = () => {
  const [region, setRegion] = useState("kanto");
  // Fetch pokedex data for given generation
  const {
    pokedex,
    loading: pokedexLoading,
    error: pokedexError,
  } = useFetchPokedex(region);
  // Process that data into random pokemon selected from it
  const {
    pokemonData,
    loading: pokemonLoading,
    error: pokemonError,
  } = usePreparePokemonData(pokedex);

  // If loading show dummy deck
  if (pokedexLoading) {
    return <p>Loading...</p>;
  }

  // If error show error message
  if (pokedexError || pokemonError) {
    return (
      <>
        <p>An error occured.</p>
        {pokedexError ? (
          <p>Pokedex Load Error: {pokedexError.toString()} </p>
        ) : null}
        {pokemonError ? (
          <p>Pokemon Load Error: {pokemonError.toString()}</p>
        ) : null}
      </>
    );
  }

  if (!pokedexLoading && !pokemonLoading)
    return (
      <div className={styles.productsRoute}>
        <SortAndFilter />
        <ProductDeck pokemon={pokemonData} />
      </div>
    );
};

export default Products;
