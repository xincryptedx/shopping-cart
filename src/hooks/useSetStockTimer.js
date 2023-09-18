import { useEffect, useState } from "react";

const useSetStockTimer = (nextUpdate) => {
  const [stockTimer, setStockTimer] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = nextUpdate - new Date();

      if (difference <= 0) {
        return "00:00";
      }

      const minutes = Math.floor(difference / 60000);
      const seconds = Math.floor((difference % 60000) / 1000);

      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedSeconds = seconds.toString().padStart(2, "0");

      return `${formattedMinutes}:${formattedSeconds}`;
    };

    const timerInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setStockTimer(timeLeft);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [nextUpdate]);

  return stockTimer;
};

export default useSetStockTimer;
