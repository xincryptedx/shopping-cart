import { useEffect } from "react";

const useSyncValues = (primaryValue, setSyncedValue, setStateCallback) => {
  useEffect(() => {
    if (typeof setStateCallback === "function") {
      setSyncedValue(primaryValue, () => setStateCallback);
    } else {
      setSyncedValue(primaryValue);
    }
  }, [primaryValue, setSyncedValue, setStateCallback]);
};

export default useSyncValues;
