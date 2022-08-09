import { useParams } from "react-router-dom";
import Informationsuser from "../components/InformationsUser/InformationsUser";

function DetailsUser() {
  const { id } = useParams();

  return (
    <>
      <h1>Hello {id}</h1>
      <Informationsuser />
    </>
  );
}

export default DetailsUser;
