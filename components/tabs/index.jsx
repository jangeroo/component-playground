import * as React from "react";
import styled from '@emotion/styled';

// For TabSwitcher, we need to have two things.
// 1. which tab content to show
// 2. should switch tab panels when the user clicks a tab

// we need to control the rendering of the tab panel content
// have a click event listener on the tabs

// To accomplish this, we need three components:

// TabSwitcher :  parent component to hold the state
// Tab :  component that tell its parent if it’s clicked
// TabPanel: component that renders when the parent tells it to

const TabSwitcherContext = React.createContext();

export function TabSwitcher({ className, children }) {
  const [activeTabId, setActiveTabId] = React.useState();
  return (
    <TabSwitcherContext.Provider
      value={{ activeTabId, setActiveTabId }}
    >
      <div className={`mja--TabSwitcher ${className}`}>
        {children}
      </div>
    </TabSwitcherContext.Provider>
  );
}

const StylableButton = styled.button`
  all: unset;
`

export function Tab({ id, className, children }) {
  const { setActiveTabId } = React.useContext(TabSwitcherContext);

  return (
    <StylableButton className={`mja--Tab ${className}`}
      onClick={() => setActiveTabId(id)}
    >
      {children}
    </StylableButton>
  );
}

export function TabPanel({ whenActiveId, children }) {
  const { activeTabId } = React.useContext(TabSwitcherContext);

  if (whenActiveId !== activeTabId) return null

  return <div className='mja--TabPanel'>{children}</div>
}
