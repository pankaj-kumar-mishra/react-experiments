import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percent, text = "Please wait..." }) => {
  const [width, setWidth] = useState(50);

  useEffect(() => {
    setWidth(percent);
  }, [percent]);

  return (
    <div className={styles.progressBar}>
      <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={width}
        className={styles.line}
        style={{
          width: `${width}%`,
        }}
      ></div>
      {!!width && (
        <h4 data-testid="progressBarMsg" className={styles.text}>
          {text}
        </h4>
      )}
    </div>
  );
};

export default ProgressBar;
