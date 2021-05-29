import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <nav>
        <div className="row">
          <div className="col-md-3">
            <h2>Online University</h2>
          </div>
          <div className="col-md-9 menuItem mr-auto">
            <div className="items">
              <li>Home</li>
              <li>Services</li>
              <li>Let's Chat</li>
              <li>Contact us</li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
