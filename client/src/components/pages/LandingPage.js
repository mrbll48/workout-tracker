import React from "react";
import landing from "../../images/landing.jpg";

export default function LandingPage() {
  return (
    <div>
      <img className="fullscreen-image" src={landing} alt="nice" />
      <div className="btn-div">
        <button className="button">Login</button>
        <button className="button">Create Account</button>
      </div>
      <div>
        <h1 className="slogan">
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
        </h1>
      </div>
    </div>
  );
}
