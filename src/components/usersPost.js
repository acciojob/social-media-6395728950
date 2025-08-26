import React from 'react'
import { useSelector } from 'react-redux'

const usersPost = () => {
    const userPost  = useSelector((state)=>state.Post.userPost)
    console.log("what is come in userPost",userPost);
  return (
    <div>
         <h1>{userPost[0].author}</h1>
        <ul>
            {
                userPost?.map((item)=>(
                    <li><a href='#'>{item.title}</a></li>
                  
                ))
            }
        </ul>

    </div>
  )
}

export default usersPost