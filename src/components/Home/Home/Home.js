import React, { createContext, useState } from "react";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import GroupStudy from "../GroupStudy/GroupStudy";
import HeaderMain from "../HeaderMain/HeaderMain";
import Instructor from "../Instructor/Instructor";
import Services from "../Services/Services";
import Navbar from "./../Navbar/Navbar";
export const userContext = createContext();
const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    photoURL: "",
    displayName: "",
    error: "",
    success: false,
    showError: false,
    isLoggedIn: false,
    fName: "",
    lName: "",
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Explore></Explore>
      <Services></Services>
      <GroupStudy></GroupStudy>
      <Instructor></Instructor>
      <Footer></Footer>
      <Footer2></Footer2>
    </userContext.Provider>
  );
};

export default Home;
