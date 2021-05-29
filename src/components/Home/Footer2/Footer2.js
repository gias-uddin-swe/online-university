import React from "react";
import styles from "./Footer2.module.css";

const Footer2 = () => {
  return (
    <div className={styles.footer2}>
      <h1>this is main footer</h1>
      <div className="row main-footer d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <button className="btn btn-info">Alipay</button>
          <button className="btn btn-info ">Google play</button>
          <br />
          <div className="mt-5">
            <button className="btn btn-danger ">Alipay</button>
            <button className="btn btn-success">Google play</button>
          </div>
        </div>
        <div className="col-md-3">
          <ul className={styles.columList}>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className={styles.columList}>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className={styles.columList}>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
            <li>Paython</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
