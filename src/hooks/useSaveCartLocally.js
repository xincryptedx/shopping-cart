import { useEffect } from "react";

const useSaveCartLocally = (cart) => {
  useEffect(() => {
    if (Array.isArray(cart) && cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
};

export default useSaveCartLocally;
