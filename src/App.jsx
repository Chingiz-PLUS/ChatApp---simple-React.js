import { render } from "@testing-library/react";
import { useState } from "react";

import "./App.css";
import AllChats from "./components/AllChats/AllChats";
import Chat from "./components/Chat/Chat";
import UserInfo from "./components/UserInfo/UserInfo";

let allUsers = [
  {
    id: 1,
    username: "Farid",
    messages: [
      {
        text: "salam necese?",
        from: true,
      },
      {
        text: "Yaxwiyam, sen necesen?",
        from: false,
      },
      {
        text: "ne var ne yox?",
        from: false,
      },
    ],
  },
  {
    id: 2,
    username: "Eljan",
    messages: [
      {
        text: "salam",
        from: true,
      },
      {
        text: "necesen?",
        from: true,
      },
      {
        text: "salam, ne var ne yox?",
        from: false,
      },
    ],
  },
];

function App() {
  const [users, setUsers] = useState(allUsers);
  const [initialUser, setInitialUser] = useState({});
  const [addedUser, setAddedUser] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalBtn, setModalBtn] = useState("CLOSE");



  const handleAddUser = (e) => {
    e.preventDefault();
    if (modalBtn=="ADD") {
      setUsers([
        ...users,
        {
          id: users[users.length - 1].id + 1,
          username: addedUser,
          messages: [],
        },
      ]);
      setAddedUser("");
      setOpenModal(false);
    }
    else{
      setAddedUser("");
      setOpenModal(!openModal);
    }
  };
  

  return (
    <div className="App">
      <div className="adding-modal" style={{display: openModal? "flex":"none"}}>
        <form action="" onSubmit={(e) => handleAddUser(e)}>
          <input
            type="text"
            value={addedUser}
            onChange={(e) => {
              setAddedUser(e.target.value);
              e.target.value.length>2? setModalBtn("ADD"):setModalBtn("Close");
            }}
          />
          <button>{modalBtn}</button>
        </form>
      </div>
      <div className="left-side">
        <AllChats
          users={users}
          setUsers={setUsers}
          setInitialUser={setInitialUser}
          setOpenModal = {setOpenModal}
        />
      </div>
      <div className="main">
        <Chat initialUser={initialUser} users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
