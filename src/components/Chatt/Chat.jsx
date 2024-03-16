import React, { useEffect, useState } from "react";
import "./Chat.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import { getConversation, getUser } from "../../apiCalls";
import io from "socket.io-client";
let socket;
function Chat({ selectedChat }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getChats = async () => {
    const res = await getConversation({ to: selectedChat?.id });
    setMessages(res.messages);
  };

  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const res = await getUser();
    setUser(res.user);
  };
  useEffect(() => {
    getUserDetails();
    getChats();
    socket = io("https://ems-backend-w5vv.onrender.com", {
      transports: ["websocket"],
    });
    socket.on("chat message", (msg) => {
      if (msg.to == user.id) {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    });

    return () => {
      socket.off("chat message");
    };
  }, [selectedChat]);

  const sendMessage = (e) => {
    e.preventDefault();
    const msgPayload = {
      body: message,
      from: user.id,
      to: selectedChat.id,
    };
    socket.emit("chat message", msgPayload, (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    document.getElementById(messages?.[messages.length - 1])?.scrollIntoView();
    setMessage("");
    
  };

  useEffect(() => {
    document.getElementById(messages?.[messages.length - 1])?.scrollIntoView();
  }, [messages])
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar sx={{ width: 50, height: 50 }}>
          <img
            height="100%"
            width="100%"
            src={selectedChat?.profile_image}
            alt=""
          />
        </Avatar>
        <div className="chat_headerInfo">
          <h3>{selectedChat?.name}</h3>
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
        {messages?.map((msg) => (
          <p
            id={msg.id}
            className={`chat_message ${
              user.id === msg.from && "chat_receiver"
            }`}
          >
            <span className="chat_name">
              {" "}
              {msg.from === user.id ? user.name : selectedChat.name}{" "}
            </span>
            {msg.body}
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <InsertEmoticonOutlinedIcon />

        <form onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update input state on change
            placeholder="Type a message"
            type="text"
          />

          <SendIcon
            style={{
              fontSize: "24px",
              marginTop: "10px",
              cursor: "pointer",
              color: "#192a56",
            }}
          />
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;
