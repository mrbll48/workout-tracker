import NavScroll from "../NavScroll/NavScroll";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";
import "../css/profile.css";
import { useParams } from "react-router-dom";

export default function FriendsList() {
  const { username } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });
  console.log(data);

  const friends = data?.user.friends;
  console.log(friends);
  return (
    <div className="vh-100 profile">
      <NavScroll />
      <div>
        <h3 className="friends-list">{username}'s friends</h3>
        <div className="pt-3 d-flex justify-content-around">
          {friends?.map((friend) => (
            <Card
              className="text-light workout-card"
              style={{
                width: "10rem",
                backgroundColor: "#BFE4FD",
                textDecoration: "none",
              }}
            >
              <Card.Body>
                <Card.Title
                  className="d-flex justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <a
                    className="text-decoration-none"
                    href={`/profile/${friend.username}`}
                    style={{ color: "#011523" }}
                  >
                    View {friend.username}'s profile
                  </a>
                </Card.Title>
                <>
                  <Card.Text className="d-flex justify-content-center"></Card.Text>
                </>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
