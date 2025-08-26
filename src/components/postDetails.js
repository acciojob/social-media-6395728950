 
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom'

const postDetails = () => {
 const location = useLocation();
  const post = location.state;
  return (
    <div>
        {
            post.map((item,index)=>(
                <div key={index}>
                  <h1>{item.title}</h1>
                  <p>by {item.author} 1 minute ago</p>
                  <p>{item.content}</p>
                  {/* five reaction button */}
                  <Link  style={{background:'blue',color:'white',width:'150px',height:'60px',textAlign:'center'}} to={{
                    pathname:'/editpost',
                    state:item
                  }}>Edit Post</Link>
                </div>
            )

            )
        }
    </div>
  )
}

export default postDetails