import React from "react";
import "../css/workout-info-card.css";

function WorkoutInfoComponent({ name, muscle, instructions }) {
  return (
    // ? I believe we will need to .map this whole container to display all 10.
    // <div>
    //   <h1>{name}</h1>
    //   <h2>Muscle: {muscle}</h2>
    //   <p>{instructions}</p>
    // </div>

    <div className="container">
      <div className="box">
        <span className="title">{name}Name</span>
        <div>
          <p>
            {instructions}Some random text, im drinking a protein shake rn
            actually.
          </p>
          <span>Muscle:{muscle}</span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutInfoComponent;
