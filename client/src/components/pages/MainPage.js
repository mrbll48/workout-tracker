import React, { useState } from "react";

import "../css/mainpage.css";

import ImgComponent from "../ImgComponent";
import Dropdown from "../Dropdown";
import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";
import PostCard from "../PostCard/PostCard";
import UserWorkout from "../UserWorkout";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import NavScroll from "../NavScroll";

import { Workouts } from "../UserWorkout/Workouts";

export default function MainPage() {
  const [postCard, setPostCard] = useState(false);
  const [postWorkoutTable, setWorkoutTable] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleClosePostCard = () => {
    setPostCard(true);
  };
  const handleWorkoutTable = () => {
    setWorkoutTable(true);
  };
  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignup = () => {
    setSignup(true);
  };

  return (
    <div className="main-container" bg="dark">
      <NavScroll />
      <div className="d-flex justify-content-center">
        <ImgComponent
          image={strength}
          workoutType={"Strength"}
          workoutMuscle={"Chest"}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Dropdown title={"Strength"} onClick={() => console.log("Ok!")} />
      </div>
      <div className="d-flex justify-content-center">
        <ImgComponent
          image={stretching}
          workoutType={"Stretching"}
          workoutMuscle={"Calves"}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Dropdown title={"Stretching"} onClick={() => console.log("Ok!")} />
      </div>
      <div className="d-flex justify-content-center">
        <ImgComponent image={cardio} workoutType={"Cardio"} />
      </div>
      <div className="d-flex justify-content-center">
        <Dropdown title={"Cardio"} onClick={() => console.log("Ok!")} />
      </div>
      {postCard && <PostCard />}
      {postWorkoutTable && <UserWorkout />}
      <Workouts />
    </div>
  );
}
