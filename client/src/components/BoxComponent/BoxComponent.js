import React from "react";
import "../css/box-component.css";

// import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
const workoutAPIKey = "4Z7299Xd9HEZMOuF2j15sg==HS0gwsLVKjmqzWlK";

function BoxComponent({ image, workoutType, workoutMuscle }) {
  // const getWorkout = () => {
  //   axios
  //     .get(
  //       `https://api.api-ninjas.com/v1/exercises?type=${workoutType}&muscle=${workoutMuscle}&difficulty=beginner`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  function searchApi(workoutMuscle, workoutDifficulty) {
    const options = {
      method: "GET",
      headers: { "x-api-key": workoutAPIKey },
    };
    console.log(workoutType);
    let url = `https://api.api-ninjas.com/v1/exercises?type=${workoutType}&muscle=chest&difficulty=beginner`;
    // fetch request for workouts
    fetch(url, options)
      .then((res) => res.json())
      .then((workouts) => console.log(workouts))
      .catch((err) => {
        console.log(err);
      });
  }

  // "https://api.quotable.io/random"()
  return (
    <div className="container">
      <div className="img-container">
        <img id="img-card" src={image} alt="" />
        <div className="dropdown-container">
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "black",
                // borderColor: "#c1a362"
              }}
              id="dropdown-basic"
            >
              {workoutType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={searchApi}>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default BoxComponent;
