import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const TabsContext = createContext<{
  selectedTab?: string;
  setSelectedTab: (tab: string) => void;
}>({
  selectedTab: undefined,
  setSelectedTab: (tab: string) => {
    throw new Error("Should not be used without TabsContext Provider.");
  },
});

export const useTabsContext = () => useContext(TabsContext);

type TabsPropsType = {
  children: ReactNode;
  defaultSelectedTab: string;
};

const Tabs: FC<TabsPropsType> = ({ children, defaultSelectedTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

  const contextValue = useMemo(
    () => ({
      selectedTab,
      setSelectedTab,
    }),
    [selectedTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
