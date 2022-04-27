import { css } from "@emotion/react";
import React, { useState } from "react";

interface SliderProps {
  data: any[];
  Component: any;
}

const Slider = ({ data, Component }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = data?.length ?? 0;

  const handleOnclick = (index: number) => {
    if (index === currentIndex + 1) setCurrentIndex(currentIndex + 1);
    else if (index === currentIndex - 1) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div css={sliderContainerCss}>
      <div
        css={slidesrCss}
        style={{
          transform: `translateX(${(-100 / length) * (0.5 + currentIndex)}%)`,
        }}
      >
        {data.map((item, index) => {
          const isCurrent = index === currentIndex;

          return (
            <div
              key={item.id}
              css={slideItemCss}
              onClick={() => handleOnclick(index)}
            >
              <div css={() => slideItemContainerCss(isCurrent)}>
                <Component data={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const sliderContainerCss = css`
  overflow-x: hidden;
`;

const slidesrCss = css`
  position: relative;
  left: 50%;
  display: flex;
  flex-direction: row;
  width: fit-content;
  transition: transform 500ms ease 0s;
`;

const slideItemCss = css`
  width: 314px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideItemContainerCss = (isCurrent: any) => css`
  transition: transform 500ms ease 0s;
  transform: scale(${isCurrent ? 1 : 0.8});
`;

export default Slider;
