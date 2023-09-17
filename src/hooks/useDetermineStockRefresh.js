import { useEffect, useState } from "react";

const useDetermineStockRefresh = () => {
  // Default refresh trigger state is false
  const [refreshStockTrigger, setRefreshStockTrigger] = useState(false);

  useEffect(() => {
    // Check if there is a local storage entry
    const storedPokemonData = localStorage.getItem("pokemonData");
    const lastUpdateTime = localStorage.getItem("pokemonUpdateTime");

    if (storedPokemonData) {
      const currentTime = new Date();
      const hourTimeout = 60 * 60 * 1000; // 60s 60m 1000ms

      // If more than an hour before current time, refresh
      if (currentTime - lastUpdateTime < hourTimeout) {
        setRefreshStockTrigger(true);
      } else {
        setRefreshStockTrigger(false);
      } // Data not older than an hour, no refresh
    } else {
      // No local data, refresh
      setRefreshStockTrigger(true);
    }
  }, []);

  return [refreshStockTrigger, setRefreshStockTrigger];
};

export default useDetermineStockRefresh;