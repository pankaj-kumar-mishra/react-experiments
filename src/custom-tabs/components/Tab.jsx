import React from "react";
import styles from "../CustomTabs.module.css";
import { useTabsContext } from "./TabsContext";

const Tab = ({ name, tabIdx }) => {
  const { activeTabIdx, onClickTab } = useTabsContext();
  return (
    <li>
      <button
        onClick={() => onClickTab(tabIdx)}
        className={activeTabIdx === tabIdx && styles.active}
      >
        {name}
      </button>
    </li>
  );
};

export default Tab;
