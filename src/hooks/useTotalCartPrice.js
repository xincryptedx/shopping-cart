import { useEffect, useState } from "react";

const useTotalCartPrice = (cart) => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      console.table(cart);
      const newTotal = cart.reduce((accumulator, currentValue) => {
        const lineTotal = currentValue.price * currentValue.quantity;
        return accumulator + lineTotal;
      }, 0);

      console.log(newTotal);
      setTotalCartPrice(newTotal);
    }
  }, [cart]);
  console.log(totalCartPrice);
  return totalCartPrice;
};

export default useTotalCartPrice;
