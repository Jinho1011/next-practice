/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { css } from "@emotion/react";
import { useState } from "react";

import { useTrendingQuery } from "../../hooks/useTrendingQuery";
import Slider from "./Slider";
import TrendingSlide from "./TrendingSlide";

const LoadingFallback = () => {
  console.log("loading");
  return <div>Loading...</div>;
};

const Trending = () => {
  const [index, setIndex] = useState(0);
  const trendings = useTrendingQuery("all", "week");

  const movie = trendings.data.results[index];

  return (
    <Suspense fallback={<LoadingFallback />}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div>There was an error!</div>
            )}
          >
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
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Suspense>
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
