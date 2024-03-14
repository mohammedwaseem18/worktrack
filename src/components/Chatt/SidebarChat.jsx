import React from 'react'
import './SidebarChat.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SidebarChat() {
  return (
    <div className='sidebarChat'>

   <AccountCircleIcon style= {{height:"50px", width:"50px"}}/>

     <div className="sidebarChat_info">
        <h2>waseem</h2>
       
     </div>
      
    </div>
  )
}

export default SidebarChat
