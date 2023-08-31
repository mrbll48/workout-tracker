import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../../utils/queries";

export const Workouts = () => {
  const { loading, data } = useQuery(GET_WORKOUTS);

  const workouts = data?.workouts;
  console.log(data, workouts);

  return (
    <div className="d-flex flex-direction-column ">
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Exercises</p>
        {workouts?.map((w) => (
          <p className="px-5 border">
            By: {w.postedBy}
            <br></br>
            {w.exercise}
          </p>
        ))}
      </div>
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Sets</p>
        <br></br>
        {workouts?.map((w) => (
          <p className="px-5 border ">{w.sets}</p>
        ))}
      </div>
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Reps</p>
        <br></br>
        {workouts?.map((w) => (
          <p className="px-5 border">{w.reps}</p>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
