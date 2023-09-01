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
import StockImg from "../ImgComponent/StockImg";

import { Workouts } from "../UserWorkout/Workouts";
// import ContactUs from "../Footer/Footer";

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
      <div className="d-flex justify-content-evenly">
        <div className="">
          <StockImg
            image={strength}
            workoutType={"Strength"}
            workoutMuscle={"Chest"}
          />
          <div className="d-flex justify-content-start ps-5">
            <Dropdown title={"Strength"} onClick={() => console.log("Ok!")} />
          </div>
          <div className="">
            <StockImg
              image={stretching}
              workoutType={"Stretching"}
              workoutMuscle={"Calves"}
            />
            <div className="d-flex justify-content-start ps-5">
              <Dropdown
                title={"Stretching"}
                onClick={() => console.log("Ok!")}
              />
            </div>
          </div>
          <div className="">
            <StockImg image={cardio} workoutType={"Cardio"} />
            <div className="d-flex justify-content-start ps-5">
              <Dropdown title={"Cardio"} onClick={() => console.log("Ok!")} />
            </div>
          </div>
          {postCard && <PostCard />}
          {postWorkoutTable && <UserWorkout />}
        </div>
        <ImgComponent />
        <div id="workout-table">
          <Workouts />
        </div>
      </div>
      {/* <ContactUs /> */}
    </div>
  );
}
