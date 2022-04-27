/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { Result } from "../../interfaces/tmdb/trending";

interface SliderComponentProps {
  data: Result;
}

const TrendingSlide = ({ data }: SliderComponentProps) => {
  const titleProperty = data.original_name ? "original_name" : "original_title";
  const imgSrc = "https://image.tmdb.org/t/p/original/" + data.poster_path;

  return (
    <>
      <img src={imgSrc} alt={data[titleProperty]} css={imageCss} />
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

export default TrendingSlide;
