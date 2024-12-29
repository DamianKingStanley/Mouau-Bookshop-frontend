import React, { useState, useEffect } from "react";
import "./Home.css";

import Testimonies from "../../component/Testimonies/Testimonies";
import MainComponent from "../../component/BooksList/MainComponent";
import ShopTalk from "../ShopTalk/ShopTalk";
import GoogleBook from "../../component/GoogleBook/GoogleBook";

const Home = () => {
  return (
    <div className="HomepageBody">
      <Testimonies />
      <MainComponent />
      <ShopTalk />
      <GoogleBook />
    </div>
  );
};

export default Home;
