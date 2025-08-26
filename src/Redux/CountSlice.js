// import { createSlice } from "@reduxjs/toolkit";


// const CountSlice = createSlice({
//     name:'Count',
//     initialState:{
//         likeCount:0,
//         heartCount:0,
//         giftCount:0,
//         HeliCount:0,
//         viewCount:0
//     },

//     reducers:{
//         setCount:(state,action)=>{
//             if(action.payload=='like'){
//                 state.likeCount = state.likeCount+1
//             }else if(action.payload=='heart'){
//                 state.heartCount = state.heartCount+1
//             }else if(action.payload=='gift'){
//                 state.giftCount = state.giftCount+1
//             }else if(action.payload=='Heli'){
//                 state.HeliCount = state.HeliCount+1
//             }

//         }


//     }
// });
// export const {setCount}  = CountSlice.actions;
// export default CountSlice.reducer;