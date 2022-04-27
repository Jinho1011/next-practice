/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { Result } from "../../interfaces/tmdb/trending";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

interface SliderComponentProps {
  data: Result;
}

const TrendingSlide = ({ data }: SliderComponentProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const titleProperty = data.original_name ? "original_name" : "original_title";
  const imgSrc = "https://image.tmdb.org/t/p/original/" + data.poster_path;

  return (
    <>
      <img
        src={imgSrc}
        alt={data[titleProperty]}
        css={imageCss}
        onLoad={() => setIsLoaded(true)}
        style={isLoaded ? { display: "inline-block" } : { display: "none" }}
      />
      {isLoaded ? null : <Skeleton css={skeletonCss} />}
    </>
  );
};

const imageCss = css`
  width: 100%;
  border-radius: 20px;
  -webkit-box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  margin: 10px 0 50px 0;
`;

const skeletonCss = css`
  width: 314px;
  height: 471px;
  margin: 10px 0 50px 0;
  border-radius: 20px;
  -webkit-box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 20px 30px 0px rgba(0, 0, 0, 0.4);
  margin: 10px 0 50px 0;
`;

export default TrendingSlide;
