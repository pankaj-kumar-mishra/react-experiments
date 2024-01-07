import React, { FC, ReactNode } from "react";
import { useTabsContext } from "./Tabs.tsx";

type TabPropsType = {
  children: ReactNode;
  tab: string;
};

const Tab: FC<TabPropsType> = ({ children, tab }) => {
  const { selectedTab, setSelectedTab } = useTabsContext();

  const isSelected = selectedTab === tab;
  const buttonStyle = {
    background: isSelected ? "gold" : "white",
    fontWeight: isSelected ? "bold" : "normal",
    border: ".3px solid goldenrod",
    padding: "5px 10px",
    cursor: "pointer",
  };

  const handleClick = () => {
    setSelectedTab(tab);
  };

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={tab}
      tabIndex={isSelected ? 0 : -1}
      onClick={handleClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Tab;
