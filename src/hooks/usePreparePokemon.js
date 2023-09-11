import { useState } from "react";

const usePreparePokemon = (pokemon) => {
  const [shopPokemon, setShopPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useState(() => {
    // Select random stock amount
    const minStock = 30;
    const maxStock = 100;
    const inStock =
      Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

    // Create randomized array of pokemon
    // For inStock amount of times pop a pokemon and process it
    // After they are loaded set loading to false
  }, []);

  return { shopPokemon, error, loading };
};

export default usePreparePokemon;
