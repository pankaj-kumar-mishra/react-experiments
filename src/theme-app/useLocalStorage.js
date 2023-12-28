import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const getValue = () => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (error) {
      currentValue = defaultValue;
      console.log(error);
    }
    return currentValue;
  };

  const [value, setValue] = useState(() => getValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
