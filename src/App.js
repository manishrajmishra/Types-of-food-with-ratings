import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  chinesse: [
    { name: "Hot and Sour Soup", rating: "5/5" },
    { name: "Honey Chilli Potato", rating: "4/5" },
    { name: "Peri Peri Chicken Satay", rating: "4.5/5" },
    { name: "Veg Hakka Noodles", rating: "3.5/5" }
  ],
  italian: [
    { name: "Pasta Carbonara", rating: "4/5" },
    { name: "Focaccia Bread", rating: "3.5/5" },
    { name: "Panzenella", rating: "3/5" },
    { name: "Caprese Salad with Pesto Sauce", rating: "3.5/5" }
  ],
  indian: [
    { name: "Murg Makhani (Butter Chicken)", rating: "4.5/5" },
    { name: "Tandoori Chicken", rating: "5/5" },
    { name: "Malai Kofta", rating: "5/5" },
    { name: "Chole (Chickpea Curry)", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("chinesse");

  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function genreClickHandler(foodsitem) {
    setFood(foodsitem);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Declious-foods </h1>
      <p style={{ fontSize: "larger", color: "green" }}>
        {" "}
        List of my favourite foods with rating{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((foods) => (
          <button
            onClick={() => genreClickHandler(foods)}
            style={{
              cursor: "pointer",
              backgroundColor: "yellow",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem",
              fontWeight: "bolder"
            }}
          >
            {foods}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedFood].map((food, index) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: getBg(index)
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>Dish Name : {food.name} </div>
              <div style={{ fontSize: "smaller" }}>
                Dish Raing : {food.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
