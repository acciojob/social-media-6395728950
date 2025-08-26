import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import CountSlice from "./CountSlice"
 import NotificationSlice from "./NotificationSlice"

export default configureStore({
 reducer:{
    Post:postSlice,
    Count:CountSlice,
    Notification:NotificationSlice
 }
})