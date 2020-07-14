import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/money.png";

class NavigationBar extends Component {
  render() {
    return (
      <div
        className="uk-navbar-container"
        style={{
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
          marginBottom: 15,
        }}
      >
        <nav className="uk-navbar-container">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/" className="uk-navbar-item uk-logo">
                <img src={logo} alt="logo" style={{ height: 28, width: 28 }} />
              </Link>
            </li>
            <li>
              <Link
                to="/trading-platform"
                className="uk-button uk-button-default uk-button-small"
              >
                Trading Platform
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
