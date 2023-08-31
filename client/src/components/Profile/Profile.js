import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import { Card, Button } from "react-bootstrap";

export default function Profile() {
  const { username } = useParams();
  console.log(username);

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });

  console.log(data);
  const user = data?.user || {};
  console.log(user);
  const workouts = user.workouts;
  console.log(workouts);

  return (
    <div className="bg-dark ">
      <h3>{user.username}'s profile</h3>
      <div className="d-flex flex-row  ">
        {workouts?.map((workout) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{workout.exercise}</Card.Title>
              <Card.Text className="text-dark">Reps: {workout.reps}</Card.Text>
              <Card.Text className="text-dark">Sets: {workout.sets}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
