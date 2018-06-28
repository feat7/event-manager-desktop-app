import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className="navbar is-fixed-top is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand title">
      <Link to="/" className="navbar-item">
        Event Manager
      </Link>
    </div>
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        Home
      </Link>
    </div>
  </nav>
);

export default Navbar;
