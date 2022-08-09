import { useEffect, useState } from "react";
import User from "../models/user";
import { useParams } from "react-router-dom";
import DataService from "../services/userAPI.service";

import Informationsuser from "../components/InformationsUser/InformationsUser";

function DetailsUser() {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (id) {
      DataService.findByid(+id).then(({ data }) => {
        setUser(data);
      });
    }
  }, [id]);

  return (
    <>
      <h1>Hello {user?.firstname}</h1>
      <Informationsuser />
    </>
  );
}

export default DetailsUser;
