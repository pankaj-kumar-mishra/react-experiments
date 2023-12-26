import React from "react";
import styles from "../CustomTabs.module.css";
import { useTabsContext } from "./TabsContext";

const TabPanel = ({ children, tabIdx }) => {
  const { activeTabIdx } = useTabsContext();
  return (
    <div
      className={`${styles.tabPanel} ${
        activeTabIdx === tabIdx && styles.active
      }`}
    >
      {children}
    </div>
  );
};

export default TabPanel;
