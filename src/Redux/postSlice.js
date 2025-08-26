import { createSlice } from "@reduxjs/toolkit";
 
 
 


const postSlice = createSlice({
    name:'Post',
    initialState:{
        posts:[],
        allPost:[],
        userPost:[]
    },
    reducers:{
        CreatePost:(state,action)=>{
            const postData = action.payload;
             const id = state.posts.length;
             const Count = {
                likeCount:0,
                heartCount:0,
                giftCount:0,
                HeliCount:0,
                viewCount:0
             }
            state.allPost.push({...postData,id,Count})
            state.posts = state.allPost
        },
        EditPost:(state,action)=>{
         const Post  = action.payload;
         console.log("what is come in post",Post);
         state.allPost = state.allPost.map((item)=>item.id==Post.id ? Post: item)
         state.posts = [...state.allPost]
        },
        UserPost:(state,action)=>{
            const authorName = action.payload;
            
            state.userPost = state.allPost.filter((item)=>item.author===authorName)
         
        },
        setCount: (state, action) => {
            const { id, val } = action.payload;
          
            state.allPost = state.allPost.map((item) => {
              if (item.id === id) {
                const updatedCount = { ...item.Count };
          
                switch (val) {
                  case 0:
                    updatedCount.likeCount += 1;
                    break;
                  case 1:
                    updatedCount.giftCount += 1;
                    break;
                  case 2:
                    updatedCount.heartCount += 1;
                    break;
                  case 3:
                    updatedCount.HeliCount += 1;
                    break;
                  case 4:
                    updatedCount.viewCount += 1;
                    break;
                  default:
                    break;
                }
          
                return { ...item, Count: updatedCount };
              }
              return item;
            });
          
            state.posts = [...state.allPost];
          }
          


             
             

            //     state.posts = [...state.allPost]
        }
    

});
export const {CreatePost,EditPost,UserPost,setCount} = postSlice.actions;
export default postSlice.reducer;