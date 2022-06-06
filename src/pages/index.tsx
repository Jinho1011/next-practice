import { Suspense } from "react";
import type { NextPage } from "next";
import { QueryErrorResetBoundary } from "react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ErrorBoundary } from "react-error-boundary";

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
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <div>There was an error!</div>
                )}
              >
                <Suspense fallback={<LoadingFallback />}>
                  <Trending />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </TabPanel>
        <TabPanel>
          <Popular />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
