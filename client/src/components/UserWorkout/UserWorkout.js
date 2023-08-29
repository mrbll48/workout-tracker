import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useMutation } from "@apollo/client";
import { POST_WORKOUT } from "../../utils/mutations";
const exercise = document.getElementById("exercise");
const sets = document.getElementById("sets");
const reps = document.getElementById("reps");

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
    } catch (e) {
      console.log(e);
    }
  };

  // const [state, setState] = useState("");

  // const handler = (e) => {
  //   setState(e.key);
  //   console.log(exercise, sets, reps);
  // };

  return (
    <div>
      <div id="">
        <form className="" onSubmit={handleFormSubmit}>
          <p>Record your workout here</p>
          <div className="">
            <input
              required
              className=""
              type="text"
              name="exercise"
              onChange={handleInputChange}
            />
            <span className=""></span>
            <label className="">Exercise</label>
          </div>
          <div className="">
            <div className="">
              <input
                required
                className=""
                type="text"
                name="sets"
                onChange={handleInputChange}
              />
              <span className=""></span>
              <label className="">Sets</label>
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                required
                className=""
                type="text"
                name="reps"
                onChange={handleInputChange}
              />
              <span className=""></span>
              <label className="">Reps</label>
            </div>
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
