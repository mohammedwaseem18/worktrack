import React, { useEffect, useState } from "react";
import "./ChatBody.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { getAllMentees, getManager, getUser } from "../../apiCalls";

function ChatBody() {
  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const res = await getUser();
    setUser(res.user);
    if (res?.user?.role === "manager") {
      getMentees();
    } else {
      getManagerDetails();
    }
  };

  const [users, setUsers] = useState([]);

  const [selectedChat, setSelectedChat] = useState(null);

  const getMentees = async () => {
    const res = await getAllMentees();
    setUsers(res.mentees);
    setSelectedChat(res.mentees[0])
  };

  const getManagerDetails = async () => {
    const res = await getManager();
    setUsers([res.manager]);
    setSelectedChat(res.manager)
    
  };

  useEffect(() => {
    getUserDetails();
    
  }, []);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar users={users} setSelectedChat={setSelectedChat} />
        <Chat selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default ChatBody;
