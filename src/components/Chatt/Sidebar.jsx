import React from "react";
import "./Sidebar.css";

import SidebarChat from "./SidebarChat";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Sidebar({ users, setSelectedChat }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon style={{ height: "50px", width: "50px" }} />

        <div className="sidebar__headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>

      {/* <div className='sidebar__search'> */}
      <idv className="sidebar__searchContainer">
        <SearchOutlinedIcon />

        <input placeholder="start new chat" type="text" />
      </idv>

      {/* </div> */}

      <div className="sidebar_chats">
        {users.map((user) => (
          <div onClick={() => setSelectedChat(user)}>
            <SidebarChat user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
