import React from "react";
import Tabs from "./Tabs.tsx";
import { TabType } from "./types.ts";

const TabOne = () => {
  return (
    <div>
      <h2>Tab One</h2>
    </div>
  );
};
const TabTwo = () => {
  return (
    <div>
      <h2>Tab Two</h2>
    </div>
  );
};
const TabThree = () => {
  return (
    <div>
      <h2>Tab Three</h2>
    </div>
  );
};

const tabs: TabType[] = [
  { label: "Tab One", key: "tab1", content: <TabOne /> },
  { label: "Tab Two", key: "tab2", content: <TabTwo /> },
  { label: "Tab Three", key: "tab3", content: <TabThree /> },
];

const AccessibleTabs = () => {
  return (
    <div>
      <h3>Accessible Tabs</h3>
      <Tabs tabs={tabs} defaultSelectedTab={tabs[0]} />
    </div>
  );
};

export default AccessibleTabs;
