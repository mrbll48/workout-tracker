import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/workout-info-card.css";
let name;
let instructions;
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
];

export default function CustomDropdown({ title, muscle }) {
  const [workouts, setWorkouts] = useState();

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
      <div>
        {workouts &&
          workouts?.map((workout) => (
            <div className="container">
              <div className="box">
                <span className="title">Workout: {workout.name}</span>
                <div>
                  <p>Instructions: {workout.instructions}</p>
                  <span>Muscle:{workout.muscle}</span>

                  <br></br>
                  <button id="close-btn" onClick={() => console.log("ONCLICK")}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
