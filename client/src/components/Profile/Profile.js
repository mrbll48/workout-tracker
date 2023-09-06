import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";
import NavScroll from "../NavScroll";

import "../css/profile.css";

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
      <div className="bg-dark row" style={{ height: "92vh" }}>
        <h3 className="d-flex justify-content-center pt-4">
          {user.username}'s profile
        </h3>
        <aside className="w-25">
          <a href="/friends">Friends</a>
        </aside>
        <div className="container">
          <div className="row w-100">
            <div className="d-flex justify-content-around flex-wrap">
              {workouts?.map((workout) => (
                <div
                  className="card m-3 workout-card text-light"
                  style={{
                    width: "10rem",
                    backgroundColor: "#01577D",
                    textDecoration: "none",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{workout.exercise}</h5>
                    <p className="text-light">Reps: {workout.reps}</p>
                    <p className="text-light">Sets: {workout.sets}</p>
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
