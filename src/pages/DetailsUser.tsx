import { useParams } from "react-router-dom";

function DetailsUser() {
  const { id } = useParams();

  return <h1>Hello {id}</h1>;
}

export default DetailsUser;
