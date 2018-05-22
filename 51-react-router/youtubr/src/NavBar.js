import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="ui menu">
    <Link className="item" to="/search">
      Home
    </Link>
    <Link className="item" to="/login">
      Login
    </Link>
  </div>
);

export default NavBar;
