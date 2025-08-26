import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddNotifi } from '../Redux/NotificationSlice';

const notification = () => {
const [data,setData] = useState({
   text:'',
   author:''
})
const Dispatch = useDispatch();

const handleChange = (e)=>{
  const {name,value} = e.target;
  setData(prev=>({...prev,[name]:value}))
}

const handleSubmit = ()=>{
  Dispatch(AddNotifi(data));
}
  return (
    <div style={{margin:'10px'}}>
       <input type='text' name="text"  onChange={handleChange} value={data.text}></input>
       <select name='author' onChange={handleChange} value={data.author} style={{margin:'10px'}}>
        <option>Select Author</option>
        <option>Kuldeep</option>
        <option>Kunal</option>
        <option>Hardik</option>
       </select>
       <button onClick={handleSubmit} style={{margin:'10px'}}>Add Notification</button>
    </div>
  )
}

export default notification