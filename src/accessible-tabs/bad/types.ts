import { ReactNode } from "react";

export type TabType = {
  label: string;
  key: string;
  content: ReactNode;
};

export type TabsPropsType = {
  tabs: TabType[];
  defaultSelectedTab: TabType;
};
