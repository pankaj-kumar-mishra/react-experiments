import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "./good/index.ts";

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

const AccessibleTabs = () => {
  return (
    <div>
      <h3>Accessible Tabs ...</h3>
      <Tabs defaultSelectedTab="tab1">
        <TabList ariaLabel="Pankaj Tabs">
          <Tab tab="tab1">Tab 1</Tab>
          <Tab tab="tab2">Tab 2</Tab>
          <Tab tab="tab3">Tab 3</Tab>
        </TabList>
        <TabPanel tab="tab1">
          <TabOne />
        </TabPanel>
        <TabPanel tab="tab2">
          <TabTwo />
        </TabPanel>
        <TabPanel tab="tab3">
          <TabThree />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AccessibleTabs;
