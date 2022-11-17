import styled from "@emotion/styled";
import {
  TabSwitcher,
  Tab as BaseTab,
  TabPanel
} from "/components/tabs";

export default function TabSwitcherPage() {
  return (
    <TabSwitcher>
      <HorizontalTabs>
        <Tab id="A">A</Tab>
        <Tab id="B">B</Tab>
        <Tab id="C">C</Tab>
      </HorizontalTabs>

      <TabPanel whenActiveId="A">AAAAAAAAAA</TabPanel>
      <TabPanel whenActiveId="B">BBBBBBBBBB</TabPanel>
      <TabPanel whenActiveId="C">CCCCCCCCCC</TabPanel>
    </TabSwitcher>
  );
};

// TODO: should probably make this an exportable component too
// or maybe just a variant prop?
const HorizontalTabs = styled.ol`
  all: unset;
  display: flex;
  border: 1px solid grey;
  border-bottom: 3px solid blue;
`;

const Tab = styled(BaseTab)`
  min-width: 50px;
`
