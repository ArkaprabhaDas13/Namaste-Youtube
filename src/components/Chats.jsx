import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useSelector } from 'react-redux'
import {addChat} from '../utils/chatSlice'
import { useDispatch } from 'react-redux'
import {fakeName} from './faker'


const Chats = () => {

    console.log("COMPONENT UPDATED !!!!")

    const [chats, setChats] = useState();
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    // console.log("Dispatch = ", dispatch);

    const data = useSelector(store => store.chat?.chatArray)

    const handleClick = ()=>{
        const newName = fakeName();
        // console.log("Button clicked")
        dispatch(addChat({id:data.length, name:newName, message:comment}))
        setComment('');
    }                                                

    useEffect(()=>{

        setChats(data);

        const i = setInterval(()=>{
            const myName = fakeName();
            //API calls
            console.log("Set Interval called the API!")
            dispatch(addChat({id:data.length , name:myName, message: "My name is"+myName}))
        }, 1000)                                         /////////////// CORRECT THISSS !!!!!!!! //////////////

        return ()=>{
            clearInterval(i);
        }

    }, [data])     //this data is kept as a dependency because every time a new comment is added, the entire component needs to update/rerender to show all the updated comments

  return (
    <div className=''>
        
        <div className='h-[60vh] overflow-y-scroll flex flex-col-reverse'>
            {
                chats && chats.map((chat)=>(                                            // THis is used because during the first render, the 'chats' array is empty until the useEffect runs
                    <ChatMessage name={chat.name} message={chat.message}/>
                ))
                
            }
        </div>

        <form className='' onSubmit={(e)=>{e.preventDefault(); setComment('')}}>                          
            {/* this preventDefault() will stop the page from reloading because submitting a form rerenders the page */}
            <input value={comment} className='border border-gray-300 p-1 rounded-lg w-3/4' type="text" placeholder="Enter your text..." onChange={(e)=>{setComment(e.target.value)}}/>
            <button className='m-2 border border-blue-200 p-1 rounded-lg bg-blue-200' onClick={handleClick}>Add</button>
        </form>

    </div>
  )
}

export default Chats