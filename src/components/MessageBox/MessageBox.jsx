import React from "react";
import style from "./messagebox.module.css";

function MessageBox({ message }) {
  const messageTo = () => {
    return (
      <div className={style.chatRow} style={{justifyContent:"end"}}>
        <div className={style.messageBox}>
          <p>{message.text}</p>
        </div>
      </div>
    );
  };
  const messageFrom = () => {
    return (
      <div className={style.chatRow} style={{justifyContent: "start"}}>
        <div className={style.messageBox}>
          <p>{message.text}</p>
        </div>
      </div>
    );
  };

  return message.from ? messageFrom() : messageTo();
}

export default MessageBox;
