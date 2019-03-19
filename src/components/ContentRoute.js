import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import Detail from "../pages/Detail"
import Update from '../pages/Update';

const ContentRoute = () => {
 
    return (
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={Settings} />
        <Route path="/detail/:cre_id" component={Detail} />
        <Route path="/update/:cre_id" component={Update} />

        </div>
     
    );
  
};

export default ContentRoute;



