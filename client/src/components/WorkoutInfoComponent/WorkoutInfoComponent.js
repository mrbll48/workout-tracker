import React from "react";

function WorkoutInfoComponent({ name, muscle, instructions }) {
  return (
    // ? I believe we will need to .map this whole container to display all 10.
    <div>
      <h1>{name}</h1>
      <h2>Muscle: {muscle}</h2>
      <p>{instructions}</p>
    </div>
  );
}

export default WorkoutInfoComponent;
