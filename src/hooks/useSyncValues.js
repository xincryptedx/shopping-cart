import { useEffect } from "react";

const useSyncValues = (primaryValue, setSyncedValue) => {
  useEffect(() => {
    setSyncedValue(primaryValue);
  }, [primaryValue, setSyncedValue]);
};

export default useSyncValues;
