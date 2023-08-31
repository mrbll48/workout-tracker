import React, { useState } from "react";
import "../css/workout-info-card.css";

function APIWorkout({ name, muscle, instructions }) {
  const [workout, setWorkout] = useState();
  console.log(workout, "API");
  return (
    // ? I believe we will need to .map this whole container to display all 10.
    // * Should we display each of them on a single component?
    <div className="container">
      <div className="box">
        <span className="title">Workout: {name}</span>
        <div>
          <p>Instructions: {instructions}</p>
          <span>Muscle:{muscle}</span>
          <br></br>
          <button
            id="close-btn"
            onClick={() => console.log(workout, "ONCLICK")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default APIWorkout;
