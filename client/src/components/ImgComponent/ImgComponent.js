import React from "react";
import "../css/box-component.css";

function ImgComponent({ image, workoutType, muscleInput }) {
  return (
    
      <div className="img-container d-flex">
        <img id="img-card" src={image} alt="" />
      </div>
  );
}

export default ImgComponent;
