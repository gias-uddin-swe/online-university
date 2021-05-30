import React from "react";
import { connect } from "react-redux";
import { RemoveFromCart } from "../Redux/Actions/LoginActions";
import "./Profile.css";

const Profile = (props) => {
  console.log(props);
  const { cart, RemoveFromCart } = props;
  return (
    <div className="">
      <h1>This is Profile section</h1>
      <div className="row d-flex align-items-center justify-content-center w-100 m-auto">
        {cart.map((pd) => (
          <div key={pd.cartId} className="col-md-4 col-lg-3 col-sm-6">
            <div className="review-box mt-2">
              <div>
                <h4 className="reviewItemTitle">{pd.name}</h4>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => RemoveFromCart(pd.cartId)}
                >
                  Remove from cart
                </button>
              </div>
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
  };
};

const mapDispatchToProps = {
  RemoveFromCart: RemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
