import { useEffect, useState } from "react";

const useSetStockTimer = (nextUpdate) => {
  const [stockTimer, setStockTimer] = useState(null);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      // Compare time and set state
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return stockTimer;
};

export default useSetStockTimer;
