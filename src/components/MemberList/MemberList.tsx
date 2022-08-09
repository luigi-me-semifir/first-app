import { useEffect, useState } from "react";
import User from "../../models/user";
import axios from "axios";
// import UserAPi from "../../services/userAPI";

function MemberList() {
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    // allUsers();

    axios.get(`http://localhost:8000/members`).then(({ data }) => {
      setMembers(data);
    });
  }, []);

  // const allUsers = async () => {
  //   const data = await UserAPi.findAll();
  //   setMembers(data);
  // };

  return (
    <>
      {members.map((member) => (
        <section className="meberCards" key={member.id}>
          <p>Nom: {member.lastname}</p>
          <p>Prénom: {member.firstname}</p>
          <p>Adresse: {member.adress}</p>
        </section>
      ))}
    </>
  );
}

export default MemberList;
