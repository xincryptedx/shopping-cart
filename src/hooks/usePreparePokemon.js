import { useState } from "react";

const usePreparePokemon = (pokemon) => {
  const [shopPokemon, setShopPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Select some random pokemon
  // Query the data, format, and push to shopPokemon for each selected pokemon
  // After they are loaded set loading to false
};

export default usePreparePokemon;
