import { useEffect, useState } from "react";

const useFetchPokemon = (region = "kanto") => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Make sure region is lowercase
  let validatedRegion = region.toString().toLocaleLowerCase();
  // Check that region is valid and set to default if invalid
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
    fetch(`https://pokeapi.co/api/v2/pokedex/${validatedRegion}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setPokemon([{ ...response.pokemon_entries }]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [region]);

  return { pokemon, error, loading };
};

export default useFetchPokemon;
