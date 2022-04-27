/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";

import { useTrendingQuery } from "../../hooks/useTrendingQuery";
import Slider from "./Slider";
import TrendingSlide from "./TrendingSlide";

const Trending = () => {
  const trendings = useTrendingQuery("all", "week");

  return (
    <>
      {trendings.data?.results ? (
        <Slider data={trendings.data.results} Component={TrendingSlide} />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Trending;
