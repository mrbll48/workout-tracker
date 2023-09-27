import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ME, QUERY_SINGLE_USER } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";
import NavScroll from "../NavScroll";
import Auth from "../../utils/auth";
import { ADD_FRIEND } from "../../utils/mutations";
import { useState } from "react";

import "../css/profile.css";

export default function Profile() {
  const { username } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });
  const user = data?.user || {};
  const photos = user.photos;
  console.log(photos);
  const workouts = user.workouts;
  const loggedInUser = Auth.getProfile().data.username;
  console.log(user);

  const [friendData, setFriendData] = useState({
    _id: "",
  });

  const [addFriend, { error, _ }] = useMutation(ADD_FRIEND);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _ } = await addFriend({
        variables: { _id: user._id },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e) => {
    const { _id } = e.target;
    setFriendData({ ...friendData });
    handleFormSubmit();
  };

  return (
    <>
      <NavScroll />
      <div className="profile">
        <h3 id="username">{user.username}'s profile</h3>

        <aside className="friends">
          <>
            {loggedInUser !== user.username && (
              <aside>
                <button
                  style={{
                    backgroundColor: "#078ee9",
                    marginLeft: "min(18px, 1em)",
                  }}
                  onClick={handleFormSubmit}
                >
                  Add Friend
                </button>
              </aside>
            )}
          </>
          <a href={`/friends/${user.username}`} className="view-friends">
            <button
              style={{
                backgroundColor: "#078ee9",
                marginLeft: "min(18px, 1em)",
                marginTop: "5px",
              }}
            >
              View {user.username}'s Friends
            </button>
          </a>
        </aside>
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
