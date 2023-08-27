import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar">
      <h3>Find your Meal</h3>
      <div className="search-field">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your dish"
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
