import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Settings from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

//import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/add">
      <ListItem button>
        <ListItemIcon>
          <NoteAdd />
        </ListItemIcon>
        <ListItemText primary="Add " />
      </ListItem>
    </Link>

    <Link to="/Search">
    <ListItem button>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
    </Link>

    <Link to="/Settings">
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
