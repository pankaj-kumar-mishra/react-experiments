import React, { FC, ReactNode } from "react";
import { useTabsContext } from "./Tabs.tsx";

type TabPropsType = {
  children: ReactNode;
  tab: string;
};

const TabPanel: FC<TabPropsType> = ({ children, tab }) => {
  const { selectedTab } = useTabsContext();
  if (selectedTab !== tab) return null;

  return (
    <div id={tab} tabIndex={0} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPanel;
