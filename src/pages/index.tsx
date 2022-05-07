import { Suspense } from "react";
import type { NextPage } from "next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Trending from "../components/Index/Trending";
import Popular from "../components/Index/Popular";

const LoadingFallback = () => {
  console.log("loading");
  return <div>Loading...</div>;
};

const Home: NextPage = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Trending</Tab>
          <Tab>Popular</Tab>
        </TabList>

        <TabPanel>
          <Suspense fallback={<LoadingFallback />}>
            <Trending />
          </Suspense>
        </TabPanel>
        <TabPanel>
          <Popular />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
