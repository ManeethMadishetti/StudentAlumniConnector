import React from 'react'

import Feed from './Feed';

import Sidebar from './Sidebar';
import Widgets from './Widgets'

import {withRouter} from 'react-router-dom';
const Home = () => {
    return (
        <div>
          
          <div className="app_body">
             {/* Widgets */}
             <Sidebar /> 
             <Feed />
             {/* Widgets */}
             <Widgets/>
             
          </div>
         
        </div>
    );
}

export default withRouter(Home);
