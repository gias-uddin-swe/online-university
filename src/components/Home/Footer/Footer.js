import React from "react";
import "./Footer.moduile.css";
import loginImage from "../../../images/image/undraw_authentication_fsn5.png";
const Footer = () => {
  return (
    <div>
      <h1 className="footer-title ">
        <span style={{ fontSize: "200%", color: "magenta" }}>C</span>ontact with{" "}
        <span style={{ fontSize: "200%", color: "pink" }}>U</span>s
      </h1>
      <div className="row">
        <div className="col-md-6">
          <img className="login-image" src={loginImage} alt="" />
        </div>
        <div className="col-md-6">
          <form action="">
            <input
              className="input-field"
              type="text"
              placeholder="your name"
            />
            <br />
            <input
              className="input-field"
              type="text"
              placeholder="your Email"
            />
            <br />
            <input
              className="input-field"
              type="text"
              placeholder="your group"
            />
            <br />
            <input
              className="input-texBox input-field"
              type="text"
              placeholder="your group"
            />
            <br />
            <button className="mt-4 submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
