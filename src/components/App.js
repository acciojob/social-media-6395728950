
import React from "react";
import './../styles/App.css';
 
import users from "./users";
import posts from "./posts";
import notification from "./notification";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom";
import postDetails from "./postDetails";
import editPost from "./editPost";
import usersPost from "./usersPost";
import refreshNotification from "./refreshNotification";

const App = () => {
 
  return (
    <Router>
    <div style={{background:'purple',height:'300px',width:'full'}}>
      <h1 style={{color:'white'}}>GenZ</h1>
       
      <nav style={{display:'flex', justifyContent:'space-between', marginLeft:'10px',marginRight:'10px',position:'sticky',top:'260px'}}>
        <div style={{display:'flex',gap:'10px'}}>
        <Link to='/' style={{background:'blue',color:'white', width:'60px',height:'30px',textAlign:'center',paddingTop:'4px'}}>Posts</Link>
        <Link to='/users' style={{background:'blue',color:'white', width:'60px',height:'30px',textAlign:'center',paddingTop:'4px'}}>Users</Link>
        <Link to='/notification' style={{background:'blue',color:'white', width:'100px',height:'30px',textAlign:'center',paddingTop:'4px'}}>Notification</Link>
        </div>
       
          <Link to='/refreshNotification' style={{background:'blue',color:'white',width:'150px',height:'30px',textAlign:'center',paddingTop:'4px'}}>Refresh Notification</Link>
 
      </nav>
      </div>
      <Switch>
        <Route exact path="/" component={posts}></Route>
        <Route path="/users" component={users}></Route>
        <Route path="/notification" component={notification}></Route>
        <Route path="/postDetails" component={postDetails}></Route>
        <Route path='/editpost' component={editPost}></Route>
        <Route path='/usersPost' component={usersPost}></Route>
        <Route path='/refreshNotification' component={refreshNotification}></Route>
         
      </Switch> 
      
      

 

    

    </Router>
  )
}

export default App
