import React from "react";
import "./Instructor.css";
import guider1 from "../../../images/guider/female1.jpg";
import guider2 from "../../../images/guider/female3.jpg";
import guider3 from "../../../images/guider/male2.jpg";

const Instructor = () => {
  return (
    <div>
      <h1>
        <span style={{ fontSize: "200%" }}>O</span> ur Instructor
      </h1>
      <div className="row w-75 m-auto">
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="instructor">
            <img src={guider2} alt="" />
            <h5 className="mt-2">Mr.jack Leon</h5>
            <p>CEO of Baidu</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="instructor">
            <img src={guider3} alt="" />
            <h5 className="mt-2">Mr.jack Leon</h5>
            <p>CEO of Baidu</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="instructor">
            <img src={guider1} alt="" />
            <h5 className="mt-2">Mr.jack Leon</h5>
            <p>CEO of Baidu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
