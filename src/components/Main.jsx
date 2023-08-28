import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "./Main.css";

const Main = () => {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    axios("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(({ data }) => setMealData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      {mealData && (
        <div className="meal-info">
          <h3>Meal of the day</h3>
          <h2>
            <a
              className="meal-name"
              href={`/recipe/${mealData.meals[0].idMeal}`}
            >
              {mealData.meals[0].strMeal}
            </a>
          </h2>
          <p>
            {mealData.meals[0].strCategory} | {mealData.meals[0].strArea}
          </p>
        </div>
      )}

      {mealData && (
        <img
          src={mealData.meals[0].strMealThumb}
          alt="bread"
          className="meal-img"
        />
      )}
    </div>
  );
};

export default Main;
