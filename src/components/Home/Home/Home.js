import React from "react";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import GroupStudy from "../GroupStudy/GroupStudy";
import HeaderMain from "../HeaderMain/HeaderMain";
import Instructor from "../Instructor/Instructor";
import Navbar from "./../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Explore></Explore>
      <GroupStudy></GroupStudy>
      <Instructor></Instructor>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
};

export default Home;
