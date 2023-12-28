import React from "react";
import useLocalStorage from "./useLocalStorage";
import styles from "./themeApp.module.css";

const ThemeApp = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={styles.container} data-theme={theme}>
      <h3>Theme App</h3>
      <h4>Current Theme: {theme}</h4>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ThemeApp;
