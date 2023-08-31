import React, { useState } from "react";
import "../css/mainpage.css";

import ImgComponent from "../ImgComponent";
import Dropdown from "../Dropdown";
import strength from "../../images/upper-picture.jpg";
import stretching from "../../images/lower-picture.jpg";
import cardio from "../../images/cardio.jpg";
import cat from "../../images/black-cat.jpg";
import PostCard from "../PostCard/PostCard";
import UserWorkout from "../UserWorkout";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

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
    <div className="main-container bg-dark vh-100">
      <div className="box-component">
        <section className="">
          <ImgComponent
            image={strength}
            workoutType={"Strength"}
            workoutMuscle={"Chest"}
          />
          <Dropdown
            title={"Strength"}
            muscle
            onClick={() => console.log("Ok!")}
          />
          <ImgComponent
            image={stretching}
            workoutType={"Stretching"}
            workoutMuscle={"Calves"}
          />
          <Dropdown title={"Stretching"} onClick={() => console.log("Ok!")} />
          <ImgComponent image={cardio} workoutType={"Cardio"} />
          <Dropdown title={"Cardio"} onClick={() => console.log("Ok!")} />
        </section>

        {login && <LoginForm />}
        {signup && <SignupForm />}
        {postCard && <PostCard photo={cat} />}
        {postWorkoutTable && <UserWorkout />}

        <Workouts />
      </div>
    </div>
  );
}
