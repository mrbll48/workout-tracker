import React from "react";
import "../css/box-component.css";

function ImgComponent({ image, workoutType, muscleInput }) {
  return (
    <div className="container">
      <div className="img-container">
        <img id="img-card" src={image} alt="" />
      </div>
    </div>
  );
}

export default ImgComponent;