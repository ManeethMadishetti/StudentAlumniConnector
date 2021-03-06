import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import HeaderOption from './Feed/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from "./Feed/Home" ;
import Blogs from './Blogs/Blogs';
import Events from './Events/Events'
import Memory from './Memories/Memory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from "@material-ui/core";
import Job from './Jobs/Job';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
function App() {
  return (
    <Router>
    <div className="app">
      <div className="header">
            <div className="header_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv0QwStxsPH0IivCqt-vESnaXhwE-7AidGmQFegxYkJyOUYVoBRRsaSM6o5_-EXaz2v8&usqp=CAU" alt=""/>
            </div>
          <div className="header_right">
                <Link to=""> <HeaderOption Icon={HomeIcon} title="Home"/></Link>
                
                <Link to="/blogs"> <HeaderOption Icon={ScheduleIcon} title="Schedules"/> </Link>
                <Link to="/Events"><HeaderOption Icon={EventIcon} title="Events"></HeaderOption></Link>
               <Link to="/memory"> <HeaderOption Icon={WebIcon} title="Memories"/> </Link>
               <Link to="/jobs"> <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> </Link>
               <Link><HeaderOption Icon={ChatIcon} title="Query Alumina"/> </Link>
               <Link><HeaderOption Icon={NotificationsIcon} title="Notifications"/> </Link>
               <Link> <HeaderOption avatar={true} title="Me" /> </Link>
            </div>
       </div>

      
          <switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/memory">
            <Memory />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/jobs">
            <Job/>
          </Route>
          <Route path="/Events">
              <Events/>
          </Route>
          </switch>

      

    </div>
    </Router>
  );
}

export default App;
