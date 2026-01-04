import React, { useState } from "react";
import type { CSSProperties } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { SliderItem } from "./data";
import CardNormal from "../CardNormal/cardNormal";

interface SliderProps {
  data: SliderItem[];
  activeSlide: number;
}

const Slider: React.FC<SliderProps> = ({ data, activeSlide: initSlide }) => {
  const [activeSlide, setActiveSlide] = useState<number>(initSlide);

  const next = () => {
    if (activeSlide < data.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const getStyles = (index: number): CSSProperties => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0) translateZ(0) rotateY(0deg)",
        zIndex: 10,
      };
    if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };

    return {};
  };

  return (
    <>
      <div className="slideC">
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: `#FF616D40`,
                boxShadow: `0 5px 20px #FF616D4030`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>

            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, #FF616D40, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="btns">
        <LeftOutlined className="btn" onClick={prev} />
        <RightOutlined className="btn" onClick={next} />
      </div>
    </>
  );
};

export default Slider;

const SliderContent: React.FC<SliderItem> = ({
  id,
  img,
  name,
  topic,
  prompt,
  description
}) => (
  <div className="sliderContent">
    <CardNormal
      id={id}
      img={img}
      name={name}
      description={description}
      topic={topic}
      prompt={prompt}
    />
  </div>
);

