import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <nav>
        <div className="row">
          <div className="col-md-3">
            <h2 className="title">
              <span style={{ fontSize: "200%", color: "magenta" }}>O</span>nline
              Uni<span style={{ fontSize: "200%", color: "magenta" }}>V</span>
              ersity
            </h2>
          </div>
          <div className="col-md-9 menuItem mr-auto">
            <div className="items">
              <Link to="/profile">
                <li>Profile</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
              <Link to="/chatPage">
                <li>Let's Chat</li>
              </Link>
              <Link to="/home">
                <li>Home</li>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
