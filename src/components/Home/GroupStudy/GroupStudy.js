import React from "react";
import "./GroupStudy.css";
import group1 from "../../../images/image/group1.png";
import group2 from "../../../images/image/group2.png";
import group3 from "../../../images/image/group-math.png";

const GroupStudy = () => {
  return (
    <div className="w-100 m-auto ">
      <h1 className="group-study">
        <span style={{ fontSize: "200%", color: "green" }}>G</span>roup{" "}
        <span style={{ fontSize: "200%", color: "magenta" }}>S</span>tudy
      </h1>
      <div className="row w-100 m-auto">
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="onion-box instructor">
            <img src={group1} alt="" />
            <h2>Business Group</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              voluptates vero nihil eveniet doloremque id.
            </p>
            <button className="btn btn-info">Join Group</button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="onion-box instructor">
            <img src={group2} alt="" />
            <h2>Project Management</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              voluptates vero nihil eveniet doloremque id.
            </p>
            <button className="btn btn-info">Join Group</button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="onion-box instructor">
            <img id="onion-box" className="math-image" src={group3} alt="" />
            <h2>Advance Mathematics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              voluptates vero nihil eveniet doloremque id.
            </p>
            <button className="btn btn-info">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupStudy;
