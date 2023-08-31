import React from "react";

import "../css/box-component.css";

function ImgComponent({ image }) {
  return (
    <div className="container">
      <img id="img-card" src={image} alt="Images examples" />
    </div>
  );
}

export default ImgComponent;
