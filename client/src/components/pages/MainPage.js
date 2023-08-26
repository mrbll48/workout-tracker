import React from "react";
import "../css/mainpage.css";

import BoxComponent from "../BoxComponent";

import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="nav-icons">
        <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
          <div>
            <FaUserCircle />
          </div>
        </IconContext.Provider>
        ;
      </div>
      <div className="box-component">
        <BoxComponent
          image={strength}
          workoutType={"Strength"}
          workoutMuscle={"Chest"}
          workoutDifficulty={"Beginner"}
        />
        <BoxComponent
          image={stretching}
          workoutType={"Stretching"}
          workoutMuscle={"Calves"}
        />
        <BoxComponent image={cardio} workoutType={"Cardio"} />
      </div>
    </div>
  );
}
