import { useEffect, useState } from "react";
import shuffleArray from "../utilities/fisherShuffle";

const usePreparePokemonData = (pokedexData) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async (pokedexData) => {
      // Do not run if pokedex data null
      if (
        pokedexData === null ||
        !Array.isArray(pokedexData) ||
        pokedexData.length === 0
      ) {
        setPokemonData([]);
        setLoading(false);
      }

      // Select random stock amount
      const minStock = 10;
      const maxStock = 30;
      const stockNum =
        Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

      // Create randomized array of pokemon
      console.log("Pokedex Data", pokedexData.pokemon_entries);
      const shuffledPokedexData = shuffleArray(pokedexData.pokemon_entries);
      const chosenPokemon = [];

      // For inStock amount of times pop a pokemon and add to chosen array
      for (let i = 0; i < stockNum; i += 1) {
        chosenPokemon.push(shuffledPokedexData.pop());
      }

      // Async fetch details for all chosenPokemon
      const promises = chosenPokemon.map(async (entry) => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`,
            {
              mode: "cors",
            }
          );
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
      console.log(filteredPokemonData);
      setPokemonData(filteredPokemonData);
      setLoading(false);
    };

    getPokemonDetails(pokedexData).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [pokedexData]);

  return { pokemonData, loading, error };
};

export default usePreparePokemonData;
