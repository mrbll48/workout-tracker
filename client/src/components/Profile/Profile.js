import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";

export default function Profile(value) {
  const { username } = useParams();
  console.log(username);

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });

  console.log(data);
  const user = data?.user || {};
  console.log(user);

  return (
    <div className="bg-dark">
      <h3>{user.username}</h3>
      <p>{user._id}</p>
    </div>
  );
}
