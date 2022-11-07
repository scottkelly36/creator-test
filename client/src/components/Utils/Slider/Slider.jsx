import { Fragment } from "react";
import "./Slider.scss";

const Slider = (images) => {
  return (
    <Fragment>
      <div className="slider-container">
        {images.images.map((image, index) => {
          return (
            <img
              key={index}
              className="slider-img"
              src={image.photo}
              alt={image.caption}
            />
          );
        })}
      </div>
      <div className="slider-dots">
        {images.images.map((image, index) => {
          return (
            <div
              className={index === 0 ? "slider-dot active" : "slider-dot"}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Slider;
