import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_PAGINATION_VALUE } from "./constants";

const chatSlice = createSlice({
   
    name:'chat',

    initialState: {

        chatArray: [
        {
            id:1,
            name:"Arkaprabha Das",
            message:"I love pizza"
        },
        {
            id:2, 
            name:"Jenifer Anistone",
            message:"I love ice cream"
        },
        {
            id:3,
            name:"Tom Hanks",
            message:"I love Ginger"
        }
    
    ]
    },

    reducers: {
        addChat: (state, action)=>{
            state.chatArray.splice(LIVE_CHAT_PAGINATION_VALUE);
            state.chatArray = [action.payload, ...state.chatArray]
        },

        removeChats: (state)=>{
            state.chatArray.slice(1);
        }
    }
})

export default chatSlice.reducer;
export const {addChat, removeChats} = chatSlice.actions