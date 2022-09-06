import React, { useState } from "react";
import style from "./chat.module.css";

import MessageBox from "../MessageBox/MessageBox";

function Chat({ initialUser, users, setUsers }) {
  const [messageText, setMessageText] = useState("");
  const handleMessage = (text, e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (user.id == initialUser.id) {
        user.messages.push({
          text,
          from: false,
        });
      }
    });
    setUsers(users);
    setMessageText("");
  };
  const renderUser = () => {
    return (
      <div className={style.chat}>
        <div className={style.usernameBox}>
          <div className="container">
            <h4>{initialUser.username}</h4>
          </div>
        </div>
        <div className={style.chatBody}>
          <div className="container">
            <div className={style.chatContent}>
              {initialUser.messages.map((message) => {
                return <MessageBox message={message} />;
              })}
            </div>
          </div>
        </div>
        <div className={style.inputMessage}>
          <div className="container">
            <form action="" onSubmit={(e) => handleMessage(messageText, e)}>
              <input
                type="text"
                name=""
                id=""
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return <>{initialUser.username && renderUser()}</>;
}

export default Chat;
