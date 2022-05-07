/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { useState } from "react";

import { useTrendingQuery } from "../../hooks/useTrendingQuery";
import Slider from "./Slider";
import TrendingSlide from "./TrendingSlide";

const Trending = () => {
  const [index, setIndex] = useState(0);
  const trendings = useTrendingQuery("all", "week");

  if (trendings.isLoading || trendings.isIdle) {
    return <h1>Loading...</h1>;
  }

  if (trendings.isError) {
    return <h1>Error : {trendings.error.status_message}</h1>;
  }

  const movie = trendings.data.results[index];

  return (
    <>
      {trendings.data?.results ? (
        <>
          <Slider
            data={trendings.data.results}
            Component={TrendingSlide}
            index={index}
            setIndex={setIndex}
          />
          <div css={movieContainerCss}>
            <div css={movieInfoCss}>
              <h1 css={movieTitleCss}>
                {movie.original_name
                  ? movie.original_name
                  : movie.original_title}
              </h1>
              <p css={movieTextCss}>{movie.release_date}</p>
            </div>
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

const movieContainerCss = css`
  margin-top: -30px;
  display: flex;
  justify-content: center;
`;

const movieInfoCss = css`
  display: flex;
  justify-content: center;
  width: 314px;
`;

const movieTitleCss = css`
  font-weight: 600;
  font-size: 1.8rem;
  color: #fff;
`;

const movieTextCss = css`
  font-weight: 400;
  font-size: 1.4rem;
  color: #d4d4d4;
`;

const movieNumberCss = css``;

export default Trending;
