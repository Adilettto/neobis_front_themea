import React from "react";
import "../App.css";
import "./Main.css";

import ratataImg from "../assets/ratata.jpg"

const Main = () => {
  return (
    <div className="main">
      <div className="meal-info">
        <h3>Meal of the day</h3>
        <h2><a className="meal-name" href="/recipe">Grilled Mac and Cheese Sandwich</a></h2>
        <p>Pasta | American</p>
      </div>
      <img src={ratataImg} alt="bread" className="meal-img" />
    </div>
  );
};

export default Main;
