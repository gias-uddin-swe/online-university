import React from "react";
import styles from "./Explore.module.css";
import explore1 from "../../../images/image/explore1.png";
import explore2 from "../../../images/image/explore2.png";
import explore3 from "../../../images/image/explore3.png";
import explore4 from "../../../images/image/explore4.png";

const Explore = () => {
  return (
    <div className="text-center">
      <h1>Explore your Knowledge in your field</h1>
      <div className="row w-75 m-auto d-flex align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12 col-lg-4 p-5">
          <div className={styles.box}>
            <img className={styles.image} src={explore1} alt="" />
            <p className={styles.pTag}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              similique aspernatur eveniet repellat accusamus neque sunt,
              deleniti tempora adipisci. Ex optio blanditiis voluptates quia
              exercitationem?
            </p>
            <button className="btn btn-info mt-1">Explore</button>
          </div>
        </div>
        <div className="col-md-6 colsm-12 col-lg-4 p-5">
          <div className={styles.box}>
            <img className={styles.image2} src={explore2} alt="" />
            <p className={styles.pTag}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              similique aspernatur eveniet repellat accusamus neque sunt,
              deleniti tempora adipisci. Ex optio blanditiis voluptates quia
              exercitationem?
            </p>
            <button className="btn btn-info ">Explore</button>
          </div>
        </div>
        <div className="col-md-6 colsm-12 col-lg-4 p-5">
          <div className={styles.box}>
            <img className={styles.image} src={explore4} alt="" />
            <p className={styles.pTag}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              similique aspernatur eveniet repellat accusamus neque sunt,
              deleniti tempora adipisci. Ex optio blanditiis voluptates quia
              exercitationem?
            </p>
            <button className="btn btn-info mt-3">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
