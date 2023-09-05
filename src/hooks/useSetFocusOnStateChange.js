import { useEffect } from "react";

const useSetFocusOnStateChange = (focusTarget, state, triggerState) => {
  useEffect(() => {
    if (state === triggerState) {
      focusTarget.focus();
    }
  }, [focusTarget, state, triggerState]);
};

export default useSetFocusOnStateChange;
