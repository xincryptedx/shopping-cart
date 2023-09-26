import { useEffect, useState } from "react";

const useTotalCartPrice = (cart) => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentValue) => {
      const lineTotal = currentValue?.price * currentValue?.quantity || 0;
      return accumulator + lineTotal;
    }, 0);

    setTotalCartPrice(newTotal);
  }, [cart]);

  return totalCartPrice;
};

export default useTotalCartPrice;
