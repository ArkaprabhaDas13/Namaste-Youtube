import { createSlice } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

export const resultsSlice = createSlice({

    name: "results",

    initialState: {
        keyword:'apple'
    },

    reducers:{

        addKeyword: (state, action)=>{
            state.keyword = action.payload;
        }

    }

})

export const {addKeyword} = resultsSlice.actions;
export default resultsSlice.reducer;