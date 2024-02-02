import Users from "./components/Users";
import Send from "./components/send";

import { useEffect, useState } from "react";

function ListOfUsers() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      });
  }, []);

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setIsSend(true);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-y-4">
        {isSend ? (
          <Send />
        ) : (
          <Users
            onClickSendInvites={onClickSendInvites}
            invites={invites}
            onClickInvite={onClickInvite}
            items={users}
            searchVal={searchVal}
            handleSearchVal={handleSearchVal}
          />
        )}
      </div>
    </>
  );
}

export default ListOfUsers;
