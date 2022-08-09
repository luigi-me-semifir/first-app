import { useEffect, useState } from "react";
import User from "../../models/user";
import DataService from "../../services/userAPI.service";
import { Link } from "react-router-dom";

function MemberList() {
  const [members, setMembers] = useState<User[]>([]);

  /**
   * http request to receive data with userAPI.service
   */
  useEffect(() => {
    DataService.find().then(({ data }) => {
      setMembers(data);
    });
  }, []);

  return (
    <>
      {members.map((member) => (
        <Link to={`/${member.id}`} className="meberCards" key={member.id}>
          <p>Nom: {member.lastname}</p>
          <p>Prénom: {member.firstname}</p>
          <p>Adresse: {member.adress}</p>
        </Link>
      ))}
    </>
  );
}

export default MemberList;
