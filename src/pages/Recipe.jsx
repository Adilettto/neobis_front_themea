import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const [mealDetails, setMealDetails] = useState(null);
  const { mealId } = useParams();

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(({ data }) => setMealDetails(data.meals[0]))
      .catch((err) => console.log(err));
  }, [mealId]);

  return (
    <div>
      <Header />
      {mealDetails && (
        <div className="meal-card">
          <div className="meal-data">
            <h2 className="meal-name">{mealDetails.strMeal}</h2>
            <p>
              {mealDetails.strCategory} | {mealDetails.strArea}
            </p>
            <ul className="ingredients">
              {Object.entries(mealDetails)
                .filter(
                  ([key, value]) => key.includes("strIngredient") && value
                )
                .map(([key, value]) => (
                  <li key={key}>
                    - {value}{" "}
                    <span className="measures">
                      {mealDetails[`strMeasure${key.slice(-1)}`]}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <img src={mealDetails.strMealThumb} alt="meal" />
        </div>
      )}

      {mealDetails && (
        <div>
          <h2 className="instruction">Instruction</h2>
          <article className="article">{mealDetails.strInstructions}</article>
          {mealDetails.strYoutube && (
            <a
              href={`https://www.youtube.com/watch?v=${mealDetails.strYoutube.slice(
                -11
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <button className="youtube">Watch on YouTube</button>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;
