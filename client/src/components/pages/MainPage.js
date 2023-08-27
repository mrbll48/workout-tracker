import React, { useState } from "react";
import "../css/mainpage.css";

import BoxComponent from "../BoxComponent";
import Dropdown from "../Dropdown";

import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";
import WorkoutInfoComponent from "../WorkoutInfoComponent/WorkoutInfoComponent";

export default function MainPage() {
  const [workoutDetails, setworkoutDetails] = useState();
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
        />
        <Dropdown
          title={"Strength"}
          opt1={"Muscle 1"}
          opt2={"Muscle 2"}
          opt3={"Muscle 3"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
        <BoxComponent
          image={stretching}
          workoutType={"Stretching"}
          workoutMuscle={"Calves"}
        />
        <Dropdown
          title={"Stretching"}
          opt1={"Muscle 1"}
          opt2={"Muscle 2"}
          opt3={"Muscle 3"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
        <BoxComponent image={cardio} workoutType={"Cardio"} />
        <Dropdown
          title={"Cardio"}
          opt1={"Muscle 1"}
          opt2={"Muscle 2"}
          opt3={"Muscle 3"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
      </div>
      <WorkoutInfoComponent />
    </div>
  );
}
