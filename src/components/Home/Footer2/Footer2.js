import React from "react";
import styles from "./Footer2.module.css";

const Footer2 = () => {
  return (
    <div className={styles.footer2}>
      <div className="row main-footer d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <button className="btn btn-info m-2">Alipay</button>
          <button className="btn btn-info m-2">Google play</button>
          <br />
          <div className="mt-5">
            <button className="btn btn-danger m-2">Alipay</button>
            <button className="btn btn-success m-2">Google play</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center">
            <h2 className={styles.footerTitle}>Online University</h2>
            <p style={{ color: "white" }}>
              <small>By The Youth, For The Youth!</small>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <form action="">
            <input className="form-input" type="text" placeholder="your name" />
            <br />
            <input
              className="form-input mt-3"
              type="email"
              placeholder="your email"
            />
            <input
              className="form-input mt-3"
              type="text"
              placeholder="your message"
            />
            <button className="btn btn-info mt-4 w-100 m-auto">Submit</button>
          </form>
        </div>
        <div style={{ color: "white" }} className="col-md-3">
          <h4>FOLLOW US</h4>
          <p>Follow us on our social media profile in order to keep updated.</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          <small>
            All Rights Reserved MD GIAS UDDIN from ©Online University 2021
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer2;
