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
import ImageUpload from "../ImageUpload";
import { Workouts } from "../UserWorkout/Workouts";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

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
      {/* <div>
        <NavScroll
          opt1={handleClosePostCard}
          opt2={handleWorkoutTable}
          opt3={handleLogin}
          opt4={handleSignup}
        />
      </div> */}
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
      {login && <LoginForm />}
      {signup && <SignupForm />}
      {postCard && <ImageUpload />}
      {/* <APIWorkout /> */}
      {postCard && <PostCard photo={cat} />}
      {/* <APIWorkout /> */}
      {postWorkoutTable && <UserWorkout />}
      <Workouts />
      <div></div>
    </div>
  );
}
