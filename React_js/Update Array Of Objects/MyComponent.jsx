import React, { useState } from 'react';

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana", "Coconut", "Mango"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ""; 
    setFoods([...foods, newFood]); 
  }

  function handleRemoveFood(index) {
    const updatedFoods = [...foods]; 
    updatedFoods.splice(index, 1); 
    setFoods(updatedFoods); 
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food} <button onClick={() => handleRemoveFood(index)}>Remove</button></li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;