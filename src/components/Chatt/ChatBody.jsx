import React from 'react'
import './ChatBody.css'
import Sidebar from './Sidebar'
import Chat from './Chat'

function ChatBody() {
  return (
    <div className="app">

        <div className='app_body'> 


        <Sidebar/>
        <Chat/>
      
    </div>
    </div>
  )
}

export default ChatBody
