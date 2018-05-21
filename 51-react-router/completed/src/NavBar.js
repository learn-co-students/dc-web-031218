import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <div className="ui menu">
    <div className="item">
      <i className="red video camera icon" />
    </div>
    <Link className="item" to="/">
      Home
    </Link>
    <Link className="item" to="/search">
      Search
    </Link>
    <Link className="item" to="/login">
      Login
    </Link>
  </div>
);

export default NavBar;
