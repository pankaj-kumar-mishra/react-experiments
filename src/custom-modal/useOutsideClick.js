import { useEffect, useCallback } from "react";

const useOutsideClick = (ref, handler) => {
  const handleListener = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    },
    [handler, ref]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleListener);
    window.addEventListener("touchstart", handleListener);

    return () => {
      window.removeEventListener("mousedown", handleListener);
      window.removeEventListener("touchstart", handleListener);
    };
  }, [handleListener]);
};

export default useOutsideClick;
