import React from "react";
import styles from "../CustomTabs.module.css";

const TabPanels = ({ children }) => {
  return <div className={styles.tabPanels}>{children}</div>;
};

export default TabPanels;
