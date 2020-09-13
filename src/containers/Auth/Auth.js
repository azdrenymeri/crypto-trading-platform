import React,{ Component, Fragment } from 'react';
import { NavLink, Switch,Route } from "react-router-dom";


import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

class Auth extends Component {

  render(){
    return (
      <div className="p-3 w-100 bd-highlight px-3">

      <ul className="px-3 nav nav-tabs bd-highlight px-3">
        <li className="nav-item">
          <NavLink
            to="/auth/login"
            className="nav-link"
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/auth/signup"
            className="nav-link"
            activeClassName="active"
          >
            Sign Up
          </NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </li> */}
      </ul>
      <div className="bd-highlight overflow-auto px-3">
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </div>
    )
  }
}

export default Auth;