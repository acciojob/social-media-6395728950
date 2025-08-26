import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom'
import { EditPost } from '../Redux/postSlice';
 

const editPost = () => {

    const location   = useLocation();
    const[title,setTitle] =useState(location.state.title);
    const[content,setContent] = useState(location.state.content)
    //const posts = useSelector((state)=>state.Post.posts)
    const posts = location.state
    console.log('what is come in posts',posts)
   const Dispatch  =useDispatch();
   

    const handleSubmit =()=>{
        console.log("what is come in title",title);
     
     Dispatch(EditPost({...posts,title,content}))
     console.log("what is come in posts",posts);
    }
  return (
    <div>
        <h1>edit Post</h1>
        <label>Post Title:</label>
  <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
  <label>Content:</label>
  <textarea value ={content} onChange={(e)=>setContent(e.target.value)}></textarea>
  <br></br>
  <button onClick={handleSubmit}>Save Post</button>
        
    </div>
  )
}

export default editPost