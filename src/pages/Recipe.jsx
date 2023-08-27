import React from "react";
import Header from "../components/Header";
import ratataImg from "../assets/ratata.jpg";
import "./Recipe.css";

const Recipe = () => {
  return (
    <div>
      <Header />
      <div className="meal-card">
        <div className="meal-data">
          <h2 className="meal-name">Bitterballen (Dutch meatballs)</h2>
          <p>Beef | Dutch</p>
          <ul>
            <li></li>
          </ul>
        </div>
        <img src={ratataImg} alt="meal" />
      </div>
    </div>
  );
};

export default Recipe;
