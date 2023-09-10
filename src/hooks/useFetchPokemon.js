import { useEffect, useState } from "react";

const useFetchPokemon = (generation = 1) => {
  //There are only nine generations as of now
  generation = Math.min(Math.max(1, generation), 9);

  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/generation/${generation}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setPokemon([{ ...response }]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { pokemon, error, loading };
};

export default useFetchPokemon;
