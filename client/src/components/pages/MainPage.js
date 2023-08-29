import React from "react";
import "../css/mainpage.css";
import ImgComponent from "../ImgComponent";
import Dropdown from "../Dropdown";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";
import cat from "../../images/black-cat.jpg";
import WorkoutInfoComponent from "../WorkoutInfoComponent/WorkoutInfoComponent";
import PostCard from "../PostCard/PostCard";

const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
];

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="nav-icons">
        <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
          <div>
            <FaUserCircle />
          </div>
        </IconContext.Provider>
      </div>
      <div className="box-component">
        <ImgComponent
          image={strength}
          workoutType={"Strength"}
          workoutMuscle={"Chest"}
        />
        <Dropdown
          title={"Strength"}
          muscle
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
        <ImgComponent
          image={stretching}
          workoutType={"Stretching"}
          workoutMuscle={"Calves"}
        />
        <Dropdown
          title={"Stretching"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
        <ImgComponent image={cardio} workoutType={"Cardio"} />
        <Dropdown
          title={"Cardio"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
      </div>
      <WorkoutInfoComponent />
      <PostCard photo={cat} />
    </div>
  );
}
