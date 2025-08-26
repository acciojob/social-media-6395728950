import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePost } from '../Redux/postSlice'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FcLike } from "react-icons/fc";
import { setCount } from '../Redux/postSlice';
import { FaThumbsUp } from "react-icons/fa6";
import { MdCelebration } from "react-icons/md";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { PiEyes } from "react-icons/pi";

function Timeago(date){
  const d = new Date(date)
  console.log("what is come in d",d)
  console.log("what is come in new Date",new Date())
  console.log("what iis come in difference",new Date()-d)

  if(!isNaN(new Date()-d)){ch
    
  
  const seconds = Math.floor(( new Date()-d)/1000);
  let interval = Math.floor(seconds/86400)
  if(interval>1){
    return interval+ "days ago"
  }
  interval = Math.floor(seconds/3600)
  if(interval>1){
    return "about"+interval+"hours ago"
  }
  interval = Math.floor(seconds/60)
  if(interval>1){
    return  interval +"minutes ago"
  }else{
    return "less than a minute ago"
  }
}
}

const posts = () => {
 
   
   
  const[data,setData]  = useState({
     title:'',
     author:'',
     content:''
  })

  const [time,setTime] = useState(Timeago(new Date(postTime)))
  const[postTime,setPostTime]  = useState('')
  const posts = useSelector((state)=>state.Post.posts);
  console.log("what is come in posts",posts)
  const Dispatch = useDispatch();
  const now  = new Date();
  
   
  useEffect(()=>{
    const timer = setInterval(()=>{
       setTime(Timeago(new Date(postTime)))
    },60000)

    return ()=>clearInterval(timer)
  },[postTime]);
  
  
    const handleSubmit  =(e)=>{
      
      e.preventDefault();
        Dispatch(CreatePost(data));
        setPostTime(now)


    }
    const handleChange = (e)=>{
   const{name,value}  = e.target
   setData((prev)=>({
    ...prev,
    [name]:value
   }));
    }
  return (
    <div>
     <h1>Add a New Post</h1>
     <form onSubmit={handleSubmit}>
        <label>Post Title:</label>
        <input placeholder={`What's on your mind ?`} name='title' value={data.title} onChange={handleChange}></input>
        <label>Author:</label>
        <select name='author' value={data.author} onChange={handleChange}>
          <option>Select Author</option>
            <option>Kuldeep</option>
            <option>Hardik</option>
            <option>Kunal</option>
        </select>
        <label>Content:</label>
        <textarea name='content' value={data.content} onChange={handleChange}></textarea>
        <br></br>
        <br></br>
        <button type='submit'>Save Post</button>
     </form>
        
        <h1>Posts</h1>
        {
            posts.map((item,index)=>(
               <div key={index}>
                  <h1>{item.title}</h1>
                  <p>by {item.author} {time}</p>
                   <p>{item.content}</p>
                   {/* five reaction button */}
                   <button onClick={()=>Dispatch(setCount({...item,val:0}))}><FaThumbsUp/> {item.Count.likeCount}</button>
                   <button onClick={()=>Dispatch(setCount({...item,val:1}))}><MdCelebration /> {item.Count.giftCount}</button>
                   <button onClick={()=>Dispatch(setCount({...item,val:2}))}> <FcLike/>{item.Count.heartCount}</button>
                   <button onClick={()=>Dispatch(setCount({...item,val:3}))}> <BsRocketTakeoffFill/>{item.Count.HeliCount}</button>
                   <button> < PiEyes/>{0}</button>
                  <br></br> 
                  <br></br>

                   <Link  style={{background:'blue',color:'white',width:'150px',height:'60px',textAlign:'center'}} to={{
                     pathname:'/postDetails',
                     state:[item]
                   }} >View Post</Link> 
                </div>
            ))
         }
    </div>
  )
}

export default posts