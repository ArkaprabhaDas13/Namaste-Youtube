import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import Chats from './Chats'

const LiveChat = () => {

  return (
    <div className='border-2 border-blue-200 w-[100%] bg-slate-100 rounded-xl p-5 mx-5'>

        <Chats/>

    </div>
  )
}

export default LiveChat