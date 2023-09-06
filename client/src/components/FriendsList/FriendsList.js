import NavScroll from "../NavScroll/NavScroll";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";

export default function FriendsList() {
  const { loading, data } = useQuery(GET_ME);
  console.log(data);

  const friends = data?.me.friends;
  console.log(friends);
  return (
    <div className="bg-dark vh-100">
      <NavScroll />
      <div className="pt-3 d-flex justify-content-around">
        {friends?.map((friend) => (
          <Card
            className="text-light"
            style={{
              width: "10rem",
              backgroundColor: "#01577D",
              textDecoration: "none",
            }}
          >
            <Card.Body>
              <Card.Title
                className="d-flex justify-content-center"
                style={{ textDecoration: "none" }}
              >
                <a
                  className="text-decoration-none text-light"
                  href={`/profile/${friend.username}`}
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
  );
}
