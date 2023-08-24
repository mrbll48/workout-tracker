import React from "react";
import "../css/box-component.css";
import upper from "../../images/upper-picture.jpg";
import lower from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";

function BoxComponent() {
  return (
    <div className="container">
      <div>
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={upper} alt="" />
        </a>
      </div>
      <div>
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={lower} alt="" />
        </a>
      </div>
      <div>
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={cardio} alt="" />
        </a>
      </div>
    </div>
  );
}

export default BoxComponent;
