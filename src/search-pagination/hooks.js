import { useRef } from "react";

export const useDebounce = () => {
  const timerRef = useRef();

  const debounceCall = (cb, duration = 500) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      cb();
    }, duration);
  };

  return debounceCall;
};

export const useThrottle = () => {
  const timerRef = useRef();

  const throttleCall = (cb, duration = 500) => {
    if (!timerRef.current) {
      cb();
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
      }, duration);
    }
  };

  return throttleCall;
};
