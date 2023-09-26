import { useEffect, useState } from "react";

const useTotalInCart = (cart) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentValue) => {
      const quantity = currentValue?.quantity || 0;
      return accumulator + quantity;
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  return total;
};

export default useTotalInCart;
