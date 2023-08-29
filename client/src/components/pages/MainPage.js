import React, { useState } from "react";
import "../css/mainpage.css";

import ImgComponent from "../ImgComponent";
import Dropdown from "../Dropdown";

import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";
import cat from "../../images/black-cat.jpg";
import APIWorkout from "../APIWorkout";
import PostCard from "../PostCard/PostCard";
import UserWorkout from "../UserWorkout";
import NavScroll from "../NavScroll";

export default function MainPage() {
  const [postCard, setPostCard] = useState(false);
  const [postWorkoutTable, setWorkoutTable] = useState(false);

  const handleClosePostCard = () => {
    setPostCard(true);
  };
  const handleWorkoutTable = () => {
    setWorkoutTable(true);
  };

  return (
    <div className="main-container" bg="dark">
      <div>
        <NavScroll opt1={handleClosePostCard} opt2={handleWorkoutTable} />
      </div>
      <div className="box-component">
        <ImgComponent
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
        <ImgComponent
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
        <ImgComponent image={cardio} workoutType={"Cardio"} />
        <Dropdown
          title={"Cardio"}
          opt1={"Muscle 1"}
          opt2={"Muscle 2"}
          opt3={"Muscle 3"}
          // * Call API and display WorkoutInfoComponent
          onClick={() => console.log("Ok!")}
        />
      </div>
      {postCard && <PostCard photo={cat} />}
      <APIWorkout />
      {postWorkoutTable && <UserWorkout />}
      <div></div>
    </div>
  );
}
