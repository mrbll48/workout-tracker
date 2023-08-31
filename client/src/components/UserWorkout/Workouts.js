import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../../utils/queries";

export const Workouts = () => {
  const { loading, data } = useQuery(GET_WORKOUTS);

  const workouts = data?.workouts;
  // console.log(data, workouts);

  return (
    <section className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <p className="px-5">Exercises</p>
        {workouts?.map((w) => (
          <p className="px-5">
            {w.exercise} posted by: {w.postedBy}
          </p>
        ))}
      </div>
      <div className="d-flex justify-content-center flex-column">
        <p className="px-5">Sets</p>
        {workouts?.map((w) => (
          <p className="px-5">{w.sets}</p>
        ))}
      </div>
      <div>
        <p className="px-5">Reps</p>
        {workouts?.map((w) => (
          <p className="px-5">{w.reps}</p>
        ))}
      </div>
    </section>
  );
};
