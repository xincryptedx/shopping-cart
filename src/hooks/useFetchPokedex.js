import { useEffect, useState } from "react";

const useFetchPokedex = (region = "kanto") => {
  const [pokedex, setPokedex] = useState(null);
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
    };

    getPokedexData(validatedRegion)
      .then((response) => setPokedex(response))
      .then(setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [validatedRegion, region]);

  return { pokedex, error, loading };
};

export default useFetchPokedex;
