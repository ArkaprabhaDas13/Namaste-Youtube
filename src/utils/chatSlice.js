import { createSlice } from "@reduxjs/toolkit";

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
        addChats: (state, action)=>{
            state.chatArray = [...state.chatArray, action.payload]
        },

        removeChats: (state)=>{
            state.chatArray.slice(1);
        }
    }
})

export default chatSlice.reducer;
export const {addChats, removeChats} = chatSlice.actions