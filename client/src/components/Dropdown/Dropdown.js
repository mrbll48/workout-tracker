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
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];

export default function CustomDropdown({ title, muscle }) {
  const [workouts, setWorkouts] = useState();
  const handleReset = () => {
    setWorkouts(false);
  };

  const searchAPI = async (muscle) => {
    let options = {
      method: "GET",
      headers: { "x-api-key": apiKey },
    };

    let url = `https://api.api-ninjas.com/v1/exercises?type=${title}&muscle=${muscle}&difficulty=beginner`;
    fetch(url, options)
      .then((res) => res.json())
      .then(function (data) {
        printResults(data);
        setWorkouts(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };
  let workout;
  const printResults = async (workouts) => {
    workouts.map((workout) => console.log(workout));
  };

  return (
    <div>
      <Dropdown className="d-flex justify-content-center ">
        <Dropdown.Toggle
          style={{
            backgroundColor: "#078EE9",
            borderColor: "rgba(0, 0, 0, 0.25)",
          }}
          id="dropdown-basic"
        >
          {title}
        </Dropdown.Toggle>
        <button
          style={{
            backgroundColor: "#078EE9",
            borderColor: "rgba(0, 0, 0, 0.25)",
          }}
          onClick={handleReset}
          id="reset-btn"
        >
          Reset
        </button>
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
      <div>
        {workouts &&
          workouts?.map((workout) => (
            <div
              className="container"
              style={{
                paddingBottom: "15px",
                paddingTop: "15px",
                overflow: "hidden",
              }}
            >
              <div className="box">
                <span className="title" style={{ color: "#011523" }}>
                  Workout: {workout.name}
                </span>
                <div>
                  <p style={{ maxHeight: "150px", color: "#011523" }}>
                    Instructions: {workout.instructions}
                  </p>
                  {/* <span>Muscle:{workout.muscle}</span> */}
                  {/* <br></br>

                  <button id="close-btn" onClick={() => console.log("ONCLICK")}>
                    Close
                  </button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
