import React, { useState } from "react";
import "./modal.css";

function Modal(){
    const [username, setUsername]=useState("");

    const handleUsername=()=>{
        
    }

    return(
        <div className="modal">
            <form action="">
                <input type="text" onChange={(e)=>setUsername(e.target.name)}/>
                <button>Add new User</button>
            </form>
        </div>
    )
}