import React, {
  FC,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useRef,
} from "react";

type TabListPropsType = {
  children: ReactNode;
  ariaLabel: string;
};

const TabList: FC<TabListPropsType> = ({ children, ariaLabel }) => {
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleOnKeyDown = useCallback((event: KeyboardEvent) => {
    const tabList = tabListRef.current;
    if (!tabList) return;

    const tabs = Array.from<HTMLElement>(
      tabList.querySelectorAll('[role="tab"]:not([disabled])')
    );
    console.log(tabs);
    const index = tabs.indexOf(document.activeElement as HTMLElement);
    if (index === -1) return;

    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft": {
        const prev = (index - 1 + tabs.length) % tabs.length;
        tabs[prev].focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        const next = (index + 1 + tabs.length) % tabs.length;
        tabs[next].focus();
      }
    }
  }, []);

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleOnKeyDown}
    >
      {children}
    </div>
  );
};

export default TabList;
