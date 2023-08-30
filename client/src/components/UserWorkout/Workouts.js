import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../../utils/queries";
import { Table } from "react-bootstrap";

export const Workouts = () => {
  const { loading, data } = useQuery(GET_WORKOUTS);

  const workouts = data?.workouts;

  console.log(workouts);

  return (
    <div>
      <Table responsive variant="dark">
        <thead>
          <tr>
            <th>Exercises</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w) => (
            <tr>
              <td>{w.exercise}</td>
            </tr>
          ))}
        </tbody>

        <tbody>
          {workouts.map((w) => (
            <tr>
              <td>{w.sets}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {workouts.map((w) => (
            <tr>
              <td>{w.reps}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
