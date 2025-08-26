import { createSlice } from "@reduxjs/toolkit";

const NotificationSlice = createSlice({
    name:'Notification',
    initialState:{
        arr:[]
    },
    reducers:{
     AddNotifi:(state,action)=>{
        const data = action.payload;
          state.arr.push(data);
          
        
        }
    }
})

export const {AddNotifi} =  NotificationSlice.actions;
export default NotificationSlice.reducer;