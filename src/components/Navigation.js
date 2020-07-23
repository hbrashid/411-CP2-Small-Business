import React from "react";
import { checkAuth } from "../checkAuth";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
      <React.Fragment>
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Businesses of Austin
        </Typography>
        <ul className="nav-list">
          
            <Link className="listing" to="/">
              <li className="nav-list-item" >Listings</li>
            </Link>
            {checkAuth() &&
              <Link className="listing" to="/add">
                <li className="nav-list-item" >Add</li>
              </Link>
            }
          
          {checkAuth() ? (
              <li className="nav-list-item"
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace('/');
                }}
            
                >Logout
              </li>
            ):(
              <Link className="listing" to="/login" >
                <li>Login</li>
              </Link>
              )}
        </ul>
      </Toolbar>
    </AppBar>
    
    {checkAuth() &&
        <div style={{marginLeft: '5%'}} >Welcome, {props.user}</div>
      }
      </React.Fragment>
      
      
  );
};

export default Navigation;
