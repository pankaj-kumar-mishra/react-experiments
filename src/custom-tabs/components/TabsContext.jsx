import { createContext, useContext, useState } from "react";

const TabsContext = createContext({
  activeTabIdx: 0,
  onClickTab: () => {},
});

const TabsContextProvider = ({ children }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const onClickTab = (tabIdx) => {
    setActiveTabIdx(tabIdx);
  };

  return (
    <TabsContext.Provider value={{ activeTabIdx, onClickTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContextProvider;

export const useTabsContext = () => useContext(TabsContext);
