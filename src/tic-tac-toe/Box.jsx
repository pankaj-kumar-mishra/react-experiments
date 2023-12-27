import React from "react";
import styles from "./ticTacToe.module.css";

const Box = ({ onClick, value = "" }) => {
  return (
    <div role="button" onClick={onClick} className={styles.box}>
      {value}
    </div>
  );
};

export default Box;
