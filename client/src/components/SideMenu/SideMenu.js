import React from "react";
import Dropdown from "../Dropdown";

import "../../components/css/side-menu.css";

function SideMenu() {
  return (
    <div className="side-menu-container">
      <div className="intro">
        <h1 id="title-side">Create a Workout</h1>
        <h2 id="sub-title">Choose a type:</h2>
      </div>
      <div className="workout-type">
        <Dropdown className="workout" title={"Strength"} />
      </div>
      <div className="workout-type">
        <Dropdown className="workout" title={"Stretching"} />
      </div>
      <div className="workout-type">
        <Dropdown className="workout" title={"Cardio"} />
      </div>
    </div>
  );
}

export default SideMenu;
