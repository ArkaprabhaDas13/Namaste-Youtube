import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='my-5 flex text-[10px]'>

        <img className="h-[20px] mt-2 rounded-2xl" src="https://yt3.ggpht.com/zyYj5uFuT2UyjGMBrXYxCR3pPFccjGcdWIrvlm3jx2TOa6h1V7pjHvcbS6tM5HAkcHC6k9M8=s176-c-k-c0x00ffffff-no-rj-mo" alt="" />       
        <div className='flex mx-3 my-auto'>
            <h1 className='font-bold '>{name}</h1>
            <span className='mx-3'>{message}</span>
        </div>

    </div>
  )
} 

export default ChatMessage