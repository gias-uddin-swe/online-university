import React from "react";
import styles from "./HeaderMain.module.css";
import graduationPic from "../../../images/image/graduation.png";

const HeaderMain = () => {
  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <h1>
            Dreams don't work <br /> unless you take action
          </h1>
          <h5 className="mt-3">Every program is completed program</h5>
          <button className="btn btn-info mt-4">Buy One</button>

          <button className="btn btn-success mt-4 ms-5">Explore new</button>
        </div>
        <div className="col-md-6">
          <img className={styles.graduationImage} src={graduationPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
