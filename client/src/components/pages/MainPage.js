import React, { useState } from "react";

import "../css/mainpage.css";

import ImgComponent from "../ImgComponent";
import Dropdown from "../Dropdown";
import PostCard from "../PostCard/PostCard";
import UserWorkout from "../UserWorkout";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import NavScroll from "../NavScroll";
import StockImg from "../ImgComponent/StockImg";
import SideMenu from "../SideMenu/SideMenu";

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
    <div className="main-container">
      <div>
        <NavScroll /> {/* Navbar */}
        <SideMenu />
      </div>
      <div id="main-content">
        <ImgComponent />
        <Workouts />
      </div>
    </div>
  );
}
