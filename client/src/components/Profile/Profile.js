import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";
import NavScroll from "../NavScroll";

export default function Profile() {
  const { username } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });
  console.log(data);
  const user = data?.user || {};
  const photos = user.photos;
  console.log(photos);
  const workouts = user.workouts;

  return (
    <>
      <NavScroll />
      <div className="bg-dark row">
        <h3>{user.username}'s profile</h3>
        <div className="container">
          <div className="row w-100">
            <div className="d-flex justify-content-around flex-wrap">
              {workouts?.map((workout) => (
                <div className="card m-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{workout.exercise}</h5>
                    <p className="text-dark">Reps: {workout.reps}</p>
                    <p className="text-dark">Sets: {workout.sets}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
