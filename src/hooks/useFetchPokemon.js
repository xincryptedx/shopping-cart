import { useEffect, useState } from "react";
import shuffleArray from "../utilities/fisherShuffle";

const useFetchPokemon = (region = "kanto") => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let validatedRegion = region.toString().toLocaleLowerCase();
  const validRegions = [
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "galar",
    "paldea",
  ];
  if (!validRegions.includes(validatedRegion)) {
    validatedRegion = "kanto";
  }

  useEffect(() => {
    const getPokedexData = async (region) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokedex/${region}`,
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
    };

    const getPokemonDetails = async (pokedexData) => {
      console.log(pokedexData);
      // Select random stock amount
      const minStock = 2;
      const maxStock = 5;
      const stockNum =
        Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

      // Create randomized array of pokemon
      const shuffledPokedexData = shuffleArray(pokedexData.pokemon_entries);
      const chosenPokemon = [];

      // For inStock amount of times pop a pokemon and add to chosen array
      for (let i = 0; i < stockNum; i += 1) {
        chosenPokemon.push(shuffledPokedexData.pop());
      }

      // Async fetch details for all chosenPokemon
      const promises = chosenPokemon.map(async (entry) => {
        try {
          console.log(entry);
          const response = await fetch(entry.pokemon_species.url, {
            mode: "cors",
          });
          if (response.status >= 400) {
            throw new Error("pokemon fetch error");
          }
          console.log("Response Data:", response);
          return response.json();
        } catch (error) {
          setError(error);
          console.log(error);
          return null;
        }
      });

      const pokemonDetailsData = await Promise.all(promises);

      const filteredPokemonData = pokemonDetailsData.filter(
        (data) => data !== null
      );

      setPokemon(filteredPokemonData);
    };

    getPokedexData(validatedRegion)
      .then((response) => getPokemonDetails(response))
      .finally(setLoading(false));
  }, [validatedRegion, region]);

  return { shopPokemon: pokemon, error, loading };
};

export default useFetchPokemon;
