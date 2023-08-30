import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";

export default function Profile() {
  const { username } = useParams();
  console.log(username);

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });

  console.log(data);

  const { user } = data?.user;

  return (
    <div className="bg-dark">
      <h3>{username}</h3>
    </div>
  );
}
