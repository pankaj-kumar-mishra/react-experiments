import React from "react";
import TabsContextProvider from "./TabsContext";

const Tabs = ({ children }) => {
  return (
    <TabsContextProvider>
      <div>{children}</div>
    </TabsContextProvider>
  );
};

export default Tabs;
