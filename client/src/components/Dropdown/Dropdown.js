import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/workout-info-card.css";

const apiKey = "4Z7299Xd9HEZMOuF2j15sg==HS0gwsLVKjmqzWlK";
const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
];

export function APIWorkout({ name, muscle, instructions }) {
  const [workout, setWorkout] = useState();
  console.log(workout, "API");
}

export default function CustomDropdown({ title, muscle }) {
  const searchAPI = async (muscle) => {
    let options = {
      method: "GET",
      headers: { "x-api-key": apiKey },
    };

    let url = `https://api.api-ninjas.com/v1/exercises?type=${title}&muscle=${muscle}&difficulty=beginner`;
    fetch(url, options)
      .then((res) => res.json())
      .then(function (workouts) {
        console.log(workouts, "DROPDOWN");
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  let name;
  let instructions;

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: "black",
            paddingTop: "5px",
            // borderColor: "#c1a362"
          }}
          id="dropdown-basic"
        >
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <>
            {muscles.map((muscle) => (
              <Dropdown.Item onClick={() => searchAPI(muscle)} key={muscle}>
                {muscle}
              </Dropdown.Item>
            ))}
          </>
        </Dropdown.Menu>
      </Dropdown>
      <div className="container">
        <div className="box">
          <span className="title">Workout: {name}</span>
          <div>
            <p>Instructions: {instructions}</p>
            <span>Muscle:{muscle}</span>
            <br></br>
            <button id="close-btn" onClick={() => console.log("ONCLICK")}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
