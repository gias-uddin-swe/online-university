import React, { useState } from "react";
import "./Login.css";
import googleImage from "../../images/logo/search.png";
import loginPage from "../../images/logo/undraw_authentication_fsn5.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import Footer2 from "../Home/Footer2/Footer2";
import Navbar from "../Home/Navbar/Navbar";
// import { addUserInfo } from "./../Redux/Actions/LoginActions";
// import { connect } from "react-redux";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = (props) => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    displayName: "",
    email: "",
    password: "",
    error: "",
    success: false,
    isLoggedIn: false,
  });
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email, photoURL } = result.user;

        const userInfo = {
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          isSignIn: true,
        };

        setUser(userInfo);
        storeEmail(userInfo.email);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const newError = { ...user };
        newError.error = error.message;
        setUser(newError);
      });
  };
  const storeEmail = (email) => {
    sessionStorage.setItem("email", email);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="signIn-div row d-flex justify-content align-items-center ">
        <div className="text-center google-div col-md-6">
          <div className="input-div">
            <input
              className="login-input-field"
              type="text"
              placeholder="Email"
            />
            <br />
            <input
              className="login-input-field"
              type="password"
              name=""
              placeholder="Password"
              id=""
            />
            <br />
            <button className="login-button">Login</button>
          </div>
          <button onClick={handleSignIn} className="btn login-btn google-btn">
            <img
              className="mr-4"
              style={{ width: "30px" }}
              src={googleImage}
              alt=""
            />
            Continue with Google
          </button>
        </div>
        <div className="col-md-6">
          <div className="loginPage-img">
            <img src={loginPage} alt="" />
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     courses: state.courses,
//   };
// };

// const mapDispatchToProps = {
//   addUserInfo: addUserInfo,
// };
//connect(mapStateToProps, mapDispatchToProps)
export default Login;
