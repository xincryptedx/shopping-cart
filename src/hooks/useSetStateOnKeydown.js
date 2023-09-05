import { useEffect } from "react";

const useSetStateOnKeydown = (key, state, setState, desiredState) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      const { pressedKey } = event;
      if (pressedKey === key) {
        setState(desiredState);
      }
    };
    if (state) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [key, state, setState, desiredState]);
};

export default useSetStateOnKeydown;
