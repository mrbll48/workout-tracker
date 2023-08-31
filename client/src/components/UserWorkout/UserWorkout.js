import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { POST_WORKOUT } from "../../utils/mutations";
import "../css/create-workout.css";

function UserWorkout(e) {
  const [workoutInput, setWorkout] = useState();
  const [workoutData, setWorkoutData] = useState({
    exercise: "",
    sets: "",
    reps: "",
  });

  const [postWorkout, { error, data }] = useMutation(POST_WORKOUT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
    console.log(workoutData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(workoutData);
      const { data } = await postWorkout({
        variables: { ...workoutData },
      });
      console.log(data, "DATA");
      window.location.assign("/main");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-dark vh-100 pt-5">
      <div className="d-flex justify-content-around ">
        <form className="" onSubmit={handleFormSubmit}>
          <h1>Record your workout here</h1>
          <div className="">
            <input
              className="text-black"
              required
              type="text"
              name="exercise"
              onChange={handleInputChange}
              placeholder="Exercise"
            />
          </div>
          <div className="">
            <input
              className="text-black"
              required
              type="text"
              name="sets"
              onChange={handleInputChange}
              placeholder="Sets"
            />
          </div>
          <div className="">
            <input
              className="text-black"
              required
              type="text"
              name="reps"
              onChange={handleInputChange}
              placeholder="Reps"
            />
          </div>
          <button className="submit" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserWorkout;
