import { useEffect, useState } from "react";

const useDetermineStockRefresh = () => {
  // Default refresh trigger state is false
  const [stockRefreshTrigger, setStockRefreshTrigger] = useState(null);
  const [nextUpdate, setNextUpdate] = useState(null);

  useEffect(() => {
    // Check if there is a local storage entry
    const storedPokemonData = localStorage.getItem("pokemonData");
    const lastUpdateTime = localStorage.getItem("pokemonUpdateTime");

    const hourTimeout = 60 * 60 * 1000; // 60s 60m 1000ms

    if (storedPokemonData && lastUpdateTime) {
      const lastTime = new Date(lastUpdateTime);
      const currentTime = new Date();

      // Calculate the time when data should be refreshed
      const nextUpdateTime = new Date(lastTime.getTime() + hourTimeout);

      // If more than an hour before current time, refresh
      if (currentTime >= nextUpdateTime) {
        setStockRefreshTrigger(true);
        setNextUpdate(new Date(currentTime.getTime() + hourTimeout));
      } else {
        setStockRefreshTrigger(false);
        setNextUpdate(nextUpdateTime);
      }
    } else {
      setStockRefreshTrigger(true);
      setNextUpdate(new Date().getTime() + hourTimeout);
    }
  }, []);

  return [stockRefreshTrigger, nextUpdate];
};

export default useDetermineStockRefresh;
