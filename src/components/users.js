import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { UserPost } from '../Redux/postSlice';

const users = () => {
  const Dispatch = useDispatch();
  return (
    <div>
        <ul>
          <li>
          <a href='/users' onClick={()=>Dispatch(UserPost('Kuldeep'))}>
            <Link to='/usersPost'>Kuldeep</Link>
          </a> 
          </li>
        
         <li>
         <a href='/users' onClick={()=>Dispatch(UserPost('Hardik'))}>
          <Link to='/usersPost'>Hardik</Link>
          </a> 
         </li>
       
       <li>
         <a href='/users' onClick={()=>Dispatch(UserPost('Kunal'))}>
         <Link to='/usersPost'>Kunal</Link>
         </a>
         </li>
        </ul>
    </div>
  )
}

export default users