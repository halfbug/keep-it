import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Search from "../pages/Search";
import Settings from "../pages/Settings";

const ContentRoute = () => {
 
    return (
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={Settings} />
        </div>
     
    );
  
};

export default ContentRoute;



