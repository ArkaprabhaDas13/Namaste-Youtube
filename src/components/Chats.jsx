import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useSelector } from 'react-redux'




const Chats = () => {

    const [chats, setChats] = useState([]);

    const data = useSelector(store => store.chat?.chatArray)

    

    useEffect(()=>{

        setChats(data);

        const i = setInterval(()=>{

            //API calls
            console.log("Set Interval called the API!")
        }, 10000)                                         /////////////// CORRECT THISSS !!!!!!!! //////////////

        return ()=>{
            clearInterval(i);
        }

    }, [])

  return (
    <div>
        {
            chats && chats.map((chat)=>(                                            // THis is used because during the first render, the 'chats' array is empty until the useEffect runs
                <ChatMessage name={chat.name} message={chat.message}/>
            ))
        }

    </div>
  )
}

export default Chats