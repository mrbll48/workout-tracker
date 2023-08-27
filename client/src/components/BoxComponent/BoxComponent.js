import React, { useState } from "react";
import "../css/box-component.css";

// import Dropdown from "react-bootstrap/Dropdown";
const workoutAPIKey = "4Z7299Xd9HEZMOuF2j15sg==HS0gwsLVKjmqzWlK";

function BoxComponent({ image, workoutType, muscleInput }) {
  //* Storing the API data on this useState (workout)
  const [workout, setWorkout] = useState();

  function searchApi() {
    const options = {
      method: "GET",
      headers: { "x-api-key": workoutAPIKey },
    };
    let url = `https://api.api-ninjas.com/v1/exercises?type=${workoutType}&muscle=${muscleInput}&difficulty=beginner`;
    // fetch request for workouts
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setWorkout(json))
      .then(() => {
        console.log(workout);
        //* This is the information we will need to display.
        console.log(workout[0].name);
        console.log(workout[0].muscle);
        console.log(workout[0].instructions);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="img-container">
        <img id="img-card" src={image} alt="" />
      </div>
    </div>
  );
}

export default BoxComponent;
