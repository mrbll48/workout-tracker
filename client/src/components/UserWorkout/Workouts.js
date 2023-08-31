import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../../utils/queries";

export const Workouts = () => {
  const { loading, data } = useQuery(GET_WORKOUTS);

  const workouts = data?.workouts;

  console.log(workouts);

  return (
    <div className="d-flex bg-dark flex-direction-column ">
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Exercises</p>
        {workouts?.map((w) => (
          <p className="px-5 border border-danger">
            {w.exercise} posted by: {w.postedBy}
          </p>
        ))}
      </div>
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Sets</p>
        {workouts?.map((w) => (
          <p className="px-5 border border-danger">{w.sets}</p>
        ))}
      </div>
      <div className="d-flex flex-column border border-primary">
        <p>Reps</p>
        {workouts?.map((w) => (
          <p className="px-5 border border-danger">{w.reps}</p>
        ))}
      </div>
      <div className="d-flex flex-column border border-primary">
        <p className="px-5">Posted By</p>
        {workouts?.map((w) => (
          <p className="px-5 border border-danger">{w.username}</p>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
