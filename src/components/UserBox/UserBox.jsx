import React from "react";
import style from "./userbox.module.css";


function UserBox({user,setInitialUser}){
    return(
        <div className={style.userbox} onClick={()=>setInitialUser(user)}>
            <h4>{user.username}</h4>
        </div>
    )
}

export default UserBox;