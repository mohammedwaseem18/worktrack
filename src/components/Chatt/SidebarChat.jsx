import React from 'react'
import './SidebarChat.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from "@mui/material/Avatar";

function SidebarChat({user}) {
  return (
    <div className='sidebarChat'>

      {/* <AccountCircleIcon style= {{height:"50px", width:"50px"}}/> */}
      
      <Avatar sx={{ width: 50, height: 50 }}>
              <img
                height="100%"
                width="100%"
                src={user?.profile_image}
                alt=""
              />
            </Avatar>

     <div className="sidebarChat_info">
        <h2>{user.name}</h2>
       
     </div>
      
    </div>
  )
}

export default SidebarChat
