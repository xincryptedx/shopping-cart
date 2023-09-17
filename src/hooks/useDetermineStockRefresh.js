import { useState } from "react";

const useDetermineStockRefresh = () => {
  // Default refresh trigger state is false
  const [refreshStockTrigger, setRefreshStockTrigger] = useState(false);

  // Check if there is a local storage entry
  // If not, time for refresh
  // If local storage entry, check its timestamp
  // If more than an hour before current time, time for refresh

  return [refreshStockTrigger, setRefreshStockTrigger];
};

export default useDetermineStockRefresh;
