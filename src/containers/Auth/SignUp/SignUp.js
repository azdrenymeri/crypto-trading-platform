import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <form className="pt-3 px6">
        <h2>Sign Up</h2>
        <div className="form-group pt-2">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" className="form-control" id="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
