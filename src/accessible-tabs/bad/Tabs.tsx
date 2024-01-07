import React, { FC, useState } from "react";
import { TabsPropsType } from "./types";

// BAD Practice
// Enforce strict html structure by defining strict datatypes for tabs, not scalable
// accessibility issues (ally issues)
const Tabs: FC<TabsPropsType> = ({ tabs, defaultSelectedTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

  const handleSelectedTab = (item) => {
    setSelectedTab(item);
  };

  return (
    <div>
      <div>
        {tabs.map((item) => (
          <button key={item.key} onClick={() => handleSelectedTab(item)}>
            {item.label}
          </button>
        ))}
      </div>
      <div>{selectedTab.content}</div>
    </div>
  );
};

export default Tabs;
