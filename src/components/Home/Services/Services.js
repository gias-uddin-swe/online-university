import React from "react";
import "./Services.css";

import { addToCart } from "./../../Redux/Actions/LoginActions";
import { connect } from "react-redux";

const Services = (props) => {
  console.log(props);
  const { courses, addToCart } = props;

  return (
    <div className="w-100 mb-5">
      <h1>What We Provide !</h1>
      <div className="row course-main d-flex align-items-center justify-content-center w-75 m-auto">
        {courses.map((pd) => (
          <div className="col-md-12 col-lg-4 col-sm-12 ">
            <div className="course-box">
              <img src={pd.photo} alt="" />
              <h2>{pd.name}</h2>
              <p>{pd.details}</p>
              <button
                onClick={() => addToCart(pd.id, pd.name)}
                className="btn btn-info m-2"
              >
                Buy Now
              </button>
              <button className="btn btn-info m-2">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    courses: state.courses,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Services);
