import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then(({ data }) => {
        setFilteredMeals(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="search-block">
      <div className="search-bar">
        <h3>Find your Meal</h3>
        <div className="search-field">
          <input
            className="search-input"
            type="text"
            placeholder="Enter your dish"
            onChange={handleInputChange}
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
      </div>
      <div className="meal-list">
        {loading && <p>Loading...</p>}
        {!loading &&
          filteredMeals.map((meal) => (
            <div className="meal-item" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="meal" />
              <div className="meal-name-short">
                <a href={`/recipe/${meal.idMeal}`}>
                  <h3>{meal.strMeal}</h3>
                </a>
                <p>
                  {meal.strCategory} | {meal.strArea}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
