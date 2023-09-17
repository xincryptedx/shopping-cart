import { useEffect, useState } from "react";

const useSetStockTimer = (nextUpdate) => {
  const [stockTimer, setStockTimer] = useState(null);

  useEffect(() => {
    setInterval(() => {
      // Compare time and set state
    }, 1000);
  }, []);
};

export default useSetStockTimer;
