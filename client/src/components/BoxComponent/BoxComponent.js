import React from "react";
import "../css/box-component.css";
import upper from "../../images/upper-picture.jpg";
import lower from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";

function BoxComponent() {
  return (
    <div className="container">
      <div className="img-container">
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={upper} alt="" />
        </a>
        <h1 style={{ color: "white" }}>Upper Body</h1>
      </div>
      <div className="img-container">
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={lower} alt="" />
        </a>
        <h1 style={{ color: "white" }}>Lower Body</h1>
      </div>
      <div className="img-container">
        <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
          <img id="img-card" src={cardio} alt="" />
        </a>
        <h1 style={{ color: "white" }}>Cardio</h1>
      </div>
    </div>
  );
}

export default BoxComponent;
