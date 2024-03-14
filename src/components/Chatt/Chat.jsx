import React, { useState } from "react";
import "./Chat.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

import SendIcon from '@mui/icons-material/Send';

function Chat() {
  const [input, setInput] = useState(""); // Define state variable 'input'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Message sent:", input);
    setInput(""); // Clear input field after submission
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <AccountCircleIcon style = {{height:"80px", width:"80px"}} />
        <div className="chat_headerInfo">
          <h3>waseem</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <SearchOutlinedIcon />
          <AppsOutlinedIcon />
          <AttachFileOutlinedIcon />
          <MoreVertOutlinedIcon />
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name"> waseem </span>
          This is a message from waseem 
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name"> aman</span>
          This is a message
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticonOutlinedIcon />

        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)} // Update input state on change
            placeholder="Type a message"
            type="text"
          />



            <SendIcon style={{ fontSize: "24px", marginTop:"10px", cursor:"pointer", color:"#192a56"}} />
         
        </form>
        <MicOutlinedIcon/>
      </div>
    </div>
  );
}

export default Chat;

