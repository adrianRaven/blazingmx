import React from "react";
import "../css/HomeScreen.css";
export const HomeScreen = () => {
  return (
    <div className="home__container">
      <div className="logo__container">
        <img alt="logo" src={require("../img/logoRED.png")}></img>
        <div className="home__title">BLAZING MX</div>
      </div>{" "}
    </div>
  );
};
