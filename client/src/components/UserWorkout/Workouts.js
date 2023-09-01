import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../../utils/queries";

export const Workouts = () => {
  const { loading, data } = useQuery(GET_WORKOUTS);

  const workouts = data?.workouts;
  // console.log(data, workouts);

  return (
    <div className="d-flex flex-direction-column ">
      <div className="border border-primary">
        <p className="px-5">Exercises</p>
        <div className="d-flex flex-column justify-content-around ">
          {workouts?.map((w) => (
            <p className="px-5 border" style={{ "white-space": "nowrap" }}>
              By: {w.postedBy}
              <br />
              {w.exercise}
            </p>
          ))}
        </div>
      </div>
      <div className="border border-primary ">
        <p className="px-5">Sets</p>
        <div className="d-flex flex-column justify-content-around ">
          {workouts?.map((w) => (
            <p className="px-5 border " style={{ "white-space": "nowrap" }}>
              <br />
              {w.sets}
              <br />
            </p>
          ))}
        </div>
      </div>
      <div className="border border-primary ">
        <p className="px-5">Reps</p>
        <div className="d-flex flex-column justify-content-around ">
          {workouts?.map((w) => (
            <p className="px-5 border" style={{ "white-space": "nowrap" }}>
              <br />
              {w.reps}
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
