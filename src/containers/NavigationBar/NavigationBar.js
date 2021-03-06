import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/money.png";
import avatar from "../../images/user.png";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{paddingLeft:'2.5rem',paddingRight:'2.5rem'}}>
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: 28, width: 28, verticalAlign: "middle" }}
          />
          &nbsp; Crypto Trader
        </NavLink>
        {/* <a className="navbar-brand" href="#">
        </a> */}
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="btn btn-secondary my-2 my-sm-0"
                activeClassName="btn-success"
                to="/trading-platform"
              >
                Trading Platform
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          <ul className="nav navbar-nav nav-pills navbar-right">
            {/* <li className="nav-item">
              <NavLink to="/" className="nav-link">
              <img src={avatar} alt="user" className="rounded-circle" style={{height:28, width: 28, border:"solid 1px #555"}} />
                &nbsp; &nbsp; Current User
                </NavLink> 
            </li> */}

{/* 
            <li className="nav-item dropdown">
                <NavLink 
                  to="/"  
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <img
                    src={avatar}
                    alt="user"
                    className="rounded-circle"
                    style={{ height: 28, width: 28, border: "solid 1px #555" }}
                  />
                  &nbsp; &nbsp; Current User
                </NavLink>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
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

              <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/auth/login"
              >
                Login
              </NavLink>

              </li>
              <li className="nav-item">
              <NavLink
                className="btn btn-info my-2 my-sm-0"
                activeClassName="btn-success"
                to="/auth/signup"
              >
                Signup
              </NavLink>
              </li>


          </ul>

          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search">
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
