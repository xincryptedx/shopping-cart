import { useEffect, useState } from "react";

const useFetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/151", { mode: "cors" })
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
