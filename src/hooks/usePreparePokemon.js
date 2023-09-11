import { useEffect, useState } from "react";
import shuffleArray from "../utilities/fisherShuffle";

const usePreparePokemon = (pokemon) => {
  const [shopPokemon, setShopPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Select random stock amount
    const minStock = 20;
    const maxStock = 30;
    const stockNum =
      Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

    // Create randomized array of pokemon
    const shuffledPokemon = shuffleArray(pokemon);
    const chosenPokemon = [];

    // For inStock amount of times pop a pokemon and add to chosen array
    for (let i = 0; i < stockNum; i += 1) {
      chosenPokemon.push(shuffledPokemon.pop());
    }

    // Async fetch details for all chosenPokemon
    const fetchPokemonDetails = async () => {
      const promises = chosenPokemon.map(async (entry) => {
        try {
          const response = await fetch(entry.pokemon_species.url, {
            mode: "cors",
          });
          if (response.status >= 400) {
            throw new Error("pokemon fetch error");
          }
          return response.json();
        } catch (error) {
          setError(error);
          return null;
        }
      });

      const pokemonDetailsData = await Promise.all(promises);

      const filteredPokemonData = pokemonDetailsData.filter(
        (data) => data !== null
      );

      return filteredPokemonData;
    };

    fetchPokemonDetails().then((finalizedPokemonData) => {
      setShopPokemon(finalizedPokemonData);

      setLoading(false);
    });
  }, [pokemon]);

  return { shopPokemon, error, loading };
};

export default usePreparePokemon;
