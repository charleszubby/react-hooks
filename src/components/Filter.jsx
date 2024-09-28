import React from "react";
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  //Initializing the state for the input values
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
  });

  const valueSetter = (e) => {
    setInputValues({ ...inputValues, title: e.target.value });
    console.log(inputValues);
    onFilterChange(e.target.value, inputValues.rating);
  };

  const ratingSetter = (e) => {
    setInputValues({ ...inputValues, rating: e.target.value });
    console.log(inputValues);

    onFilterChange(inputValues.title, e.target.value);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <h1>Filter Movies</h1>
      <div>
        <label>Title</label>
        <input type="text" value={inputValues.title} onChange={valueSetter} />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={10}
          step={0.1}
          value={inputValues.rating}
          onChange={ratingSetter}
        />
      </div>
    </div>
  );
};

export default Filter;
