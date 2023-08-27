import React from "react";
import "../css/workout-info-card.css";

function WorkoutInfoComponent({ name, muscle, instructions }) {
  return (
    // ? I believe we will need to .map this whole container to display all 10.
    // * Should we display each of them on a single component?
    <div className="container">
      <div className="box">
        <span className="title">{name}Name</span>
        <div>
          <p>
            {instructions}Some random text, im drinking a protein shake rn
            actually.
          </p>
          <span>Muscle:{muscle}</span>
          <br></br>
          <button id="close-btn" onClick={() => console.log("Ok")}>
            Close X
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutInfoComponent;
