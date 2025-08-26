import React from 'react'
import { useSelector } from 'react-redux'

const refreshNotification = () => {

    const arr = useSelector((state)=>state.Notification.arr);
    console.log("waht is come in arr",arr)
  return (

       <div>
       <h1>Notifications</h1>
    <div style={{backgroundColor:'grey'}}>
        
        {arr?.map((item,index)=>(
           <div key={index} style={{margin:'4px'}}>
          
            <p> <strong>{item.author} </strong>{item.text} </p>
           </div>
        ))}
    </div>
    </div>
  )
}

export default refreshNotification