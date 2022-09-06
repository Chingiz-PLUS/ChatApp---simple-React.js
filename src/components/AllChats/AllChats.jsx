import React, { useEffect, useState } from "react";
import style from "./allchats.module.css";

import UserBox from "../UserBox/UserBox";



function AllChats({users, setInitialUser, setOpenModal}) {
  const [foundUsers, setFoundUsers] = useState(users);
  useEffect(()=>{
    setFoundUsers(users);
  },[users]);
  const searchUsers = (text) => {
    if (text.trim() == "") {
      setFoundUsers(users);
    } else {
      let resultUsers = [];
      users.forEach((user) => {
        if (text == user.username.slice(0,text.length)) {
          resultUsers.push(user);
        }
      });
      setFoundUsers(resultUsers);
    }
  };

  return (
    <div className={style.allChats}>
      <div className="container">
        <input
          type="text"
          className={style.searchUser}
          placeholder="Search..."
          onChange={(e) => searchUsers(e.target.value)}
        />
        <button className={style.addUser} onClick={()=>setOpenModal(true)}>Add User</button>
        <div className={style.chats}>
          {foundUsers.map((user) => {
            return <UserBox key={user.id} user={user} setInitialUser={setInitialUser}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllChats;
