import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "./components";

const TabOneContent = () => {
  return (
    <div>
      <h3>Tab One Content</h3>
    </div>
  );
};

const TabTwoContent = () => {
  return (
    <div>
      <h3>Tab Two Content</h3>
    </div>
  );
};

const TabThreeContent = () => {
  return (
    <div>
      <h3>Tab Three Content</h3>
    </div>
  );
};

const data = [
  { id: "one", name: "Tab One" },
  { id: "two", name: "Tab Two" },
  { id: "three", name: "Tab Three" },
];
const CustomTabs = () => {
  return (
    <div>
      <h3>CustomTabs</h3>
      <Tabs>
        <TabList>
          {data.map((item, index) => (
            <Tab key={item.id} name={item.name} tabIdx={index} />
          ))}
        </TabList>
        <TabPanels>
          {data.map((item, index) => (
            <TabPanel key={item.id} tabIdx={index}>
              {item.id === "one" && <TabOneContent />}
              {item.id === "two" && <TabTwoContent />}
              {item.id === "three" && <TabThreeContent />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
