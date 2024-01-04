import { useEffect, useRef, useState } from "react";

const useCounter = (count) => {
  const [time, setTime] = useState(count);

  // Way 1 = using setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time < 0) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  // Way 2 = using setInterval
  // const timer = useRef();
  // useEffect(() => {
  //   timer.current = setInterval(() => {
  //     setTime((prev) => prev - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (time < 0) {
  //     clearInterval(timer.current);
  //   }
  // }, [time]);

  return time;
};

export default useCounter;
