import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducer/authSlice"

const appStore = configureStore({
    reducer:{
        auth:authReducer
    }
})  

export default appStore