import ProductDeck from "../../components/ProductDeck/ProductDeck";
import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import useFetchPokedex from "../../hooks/useFetchPokedex";
import styles from "./products.module.css";
import usePreparePokemonData from "../../hooks/usePreparePokemonData";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  // Get outlet context
  const [
    region,
    setRegion,
    cart,
    setCart,
    shoppingCartOpen,
    menuOpen,
    stockRefreshTrigger,
    nextUpdate,
  ] = useOutletContext();

  // Fetch pokedex data for given region
  const {
    pokedex,
    loading: pokedexLoading,
    error: pokedexError,
  } = useFetchPokedex(stockRefreshTrigger, region);
  // Process that data into random pokemon selected from it
  const {
    pokemonData,
    loading: pokemonLoading,
    error: pokemonError,
  } = usePreparePokemonData(stockRefreshTrigger, pokedex);

  // If loading show dummy deck
  if (pokedexLoading || pokemonLoading) {
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
        <SortAndFilter nextUpdate={nextUpdate} region={region} />
        <ProductDeck
          pokemonData={pokemonData}
          cart={cart}
          setCart={setCart}
          shoppingCartOpen={shoppingCartOpen}
          menuOpen={menuOpen}
        />
      </div>
    );
};

export default Products;
