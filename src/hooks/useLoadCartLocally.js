import { useEffect } from "react";

const useLoadCartLocally = (setCart) => {
  useEffect(() => {
    const locallyStoredCart = localStorage.getItem("cart");

    if (locallyStoredCart) {
      setCart(JSON.parse(locallyStoredCart));
    }
  }, [setCart]);
};

export default useLoadCartLocally;
