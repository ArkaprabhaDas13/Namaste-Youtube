import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from './searchSlice';
import chatReducer from './chatSlice';
import resultReducer from './resultsSlice'

const store = configureStore({
    reducer:{
        app: appReducer,
        search: searchReducer,
        chat: chatReducer,
        result: resultReducer
    }
})

export default store;