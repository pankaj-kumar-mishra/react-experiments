import { useCallback, useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleListener = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    handleListener();

    window.addEventListener("resize", handleListener);

    return () => {
      window.removeEventListener("resize", handleListener);
    };
  }, [handleListener]);

  return windowSize;
};

export default useWindowResize;
