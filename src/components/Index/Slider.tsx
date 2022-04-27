import { css } from "@emotion/react";
import { useState } from "react";

interface SliderProps {
  data: any[];
  Component: any;
}

const Slider = ({ data, Component }: SliderProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = data?.length ?? 0;

  const moveNextSlide = () => {
    if (currentIndex < length - 1) setCurrentIndex(currentIndex + 1);
  };

  const movePrevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleOnclick = (index: number) => {
    if (index === currentIndex + 1) moveNextSlide();
    else if (index === currentIndex - 1) movePrevSlide();
  };

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const offset = touchStart - touchEnd;
    if (offset > 150) {
      moveNextSlide();
    }

    if (offset < -150) {
      movePrevSlide();
    }
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
              onTouchStart={(touchStartEvent) =>
                handleTouchStart(touchStartEvent)
              }
              onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
              onTouchEnd={() => handleTouchEnd()}
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
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideItemContainerCss = (isCurrent: any) => css`
  transition: transform 500ms ease 0s;
  transform: scale(${isCurrent ? 1 : 0.9});
`;

export default Slider;
