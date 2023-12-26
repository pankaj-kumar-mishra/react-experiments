import React from "react";
import styles from "../CustomTabs.module.css";

const TabList = ({ children }) => {
  return <ul className={styles.tabList}>{children}</ul>;
};

export default TabList;
