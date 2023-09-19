import { useEffect, useState } from "react";
import shuffleArray from "../utilities/fisherShuffle";
import generatePokemon from "../utilities/generatePokemon";

const usePreparePokemonData = (stockRefreshTrigger, pokedexData) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async (pokedexData) => {
      // Do not run if pokedex data null
      if (
        pokedexData === null ||
        !Array.isArray(pokedexData.pokemon_entries) ||
        pokedexData.pokemon_entries.length === 0
      ) {
        setPokemonData([]);
        setLoading(false);
        return;
      }

      // Set loading back to true during load
      setLoading(true);

      // Select random stock amount
      const minStock = 10;
      const maxStock = 30;
      const stockNum =
        Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

      // Create randomized array of pokemon
      const shuffledPokedexData = shuffleArray(pokedexData.pokemon_entries);
      const chosenPokemon = [];

      // For inStock amount of times pop a pokemon and add to chosen array
      for (let i = 0; i < stockNum; i += 1) {
        chosenPokemon.push(shuffledPokedexData.pop());
      }

      // Generate the pokemon data
      const pokemonData = await generatePokemon(chosenPokemon);

      setPokemonData(pokemonData);
      localStorage.setItem("pokemonData", JSON.stringify(pokemonData));
      localStorage.setItem("pokemonUpdateTime", new Date().toString());
      setLoading(false);
    };

    if (stockRefreshTrigger === false) {
      const pokemonStringData = localStorage.getItem("pokemonData");
      const pokemonData = JSON.parse(pokemonStringData);
      setPokemonData(pokemonData);
      setLoading(false);
      return;
    }

    getPokemonDetails(pokedexData).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [pokedexData, stockRefreshTrigger]);

  return { pokemonData, loading, error };
};

export default usePreparePokemonData;
