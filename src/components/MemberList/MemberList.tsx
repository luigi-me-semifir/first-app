import { useEffect, useState } from "react";
import User from "../../models/user";
import axios from "axios";
import { Link } from "react-router-dom";
// import UserAPi from "../../services/userAPI";

function MemberList() {
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/members`).then(({ data }) => {
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
