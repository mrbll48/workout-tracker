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
      <div className="profile">
        <h3 id="username">{user.username}'s profile</h3>
        {/* <aside className="friends">
          <a href={`/friends/${user.username}`} className="view-friends">
            View {user.username}'s Friends
          </a>
        </aside> */}
        <div className="container workouts">
          <div className="row w-100">
            <div className="d-flex justify-content-around flex-wrap">
              {workouts?.map((workout) => (
                <div
                  className="card m-3 workout-card text-light"
                  style={{
                    width: "10rem",
                    backgroundColor: "#BFE4FD",
                    textDecoration: "none",
                  }}
                >
                  <div className="card-body" style={{ color: "#011523" }}>
                    <h5 className="card-title">{workout.exercise}</h5>
                    <p style={{ color: "#011523" }}>Reps: {workout.reps}</p>
                    <p style={{ color: "#011523" }}>Sets: {workout.sets}</p>
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
