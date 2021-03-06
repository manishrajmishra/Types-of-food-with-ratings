import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
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
  ],
  japanese: [
    { name: "Sushi", rating: "4.5/5" },
    { name: "Tofu", rating: "3.5/5" },
    { name: "Yakitori", rating: "4/5" },
    { name: "Ramen", rating: "3.5/5" }
  ],
  thai: [
    { name: "Spicy Shrimp Soup", rating: "4/5" },
    { name: "Spicy Green Papaya Salad", rating: "3.5/5" },
    { name: "Spicy Seafood Salad", rating: "4.5/5" },
    { name: "Thai Style Fried Noodles", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("chinesse");
  //There will be different colour at even and odd position
  function getBg(index) {
    if (index % 2 === 1) {
      return "white";
    }
    return "gray";
  }
  //click handler for button to select the countries food
  function foodClickHandler(foodsitem) {
    setFood(foodsitem);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "red",
          textAlign: "center",
          fontWeight: "bolder"
        }}
      >
        Delicious-foods{" "}
      </h1>
      <p
        style={{
          fontSize: "larger",
          color: "green",
          textAlign: "center",
          fontWeight: "bolder"
        }}
      >
        {" "}
        List of my favourite foods with rating{" "}
      </p>

      <div>
        {Object.keys(foodDictionary).map((foods) => (
          //styling of button
          <button
            //calling of foodClickHandler function
            onClick={() => foodClickHandler(foods)}
            style={{
              cursor: "pointer",
              backgroundColor: "yellow",
              borderRadius: "0.5rem",
              margin: "1rem 0.3rem",
              fontWeight: "bolder",
              fontSize: "larger",
              textAlign: "center",
              padding: "0.5rem  1rem",
              border: "2px solid black"
              
            }}
          >
            {foods}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineEnd: "22px" }}>
          {foodDictionary[selectedFood].map((food, index) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: getBg(index),
                boxShadow: "gray",
                border: "2px solid #D1D5DB",
                width: "80%"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                Dish Name : {food.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bolder" }}>
                Dish Raing : {food.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
