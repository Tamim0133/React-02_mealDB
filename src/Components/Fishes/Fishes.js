import React, { useEffect, useState } from "react";
import Fish from "../Fish/Fish";
import Header from "../Header.js/Header";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [matched, setMatched] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => {
        setFishes(data.meals);
        setMatched(data.meals);
      });
  }, []);
  return (
    <div>
      <Header fishes={fishes} setMatched={setMatched}></Header>
      <h1 className="mt-5">
        <span className="fatface">
          <span className="my-color">Best Fish Food</span>
          <br />
          that you can try now.
        </span>
      </h1>
      {fishes.length === 0 ? (
        <div>
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <p>
            <small>
              Avaiable Recipies : <b>{matched.length}</b>
            </small>
          </p>
          <div className="card-deck row gx-3 container-fluid my-5">
            {matched.map((fish) => (
              <Fish fish={fish} key={fish.idMeal}></Fish>
            ))}
            {console.log(matched)}
          </div>
        </>
      )}
    </div>
  );
};

export default Fishes;
