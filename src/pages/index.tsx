import type { NextPage } from "next";
import { css } from "@emotion/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Trending from "../components/Index/Trending";
import Popular from "../components/Index/Popular";

const Home: NextPage = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Trending</Tab>
          <Tab>Popular</Tab>
        </TabList>

        <TabPanel>
          <Trending />
        </TabPanel>
        <TabPanel>
          <Popular />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
