import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
    posterUrl: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(inputValues);
    //Resetting the input values
    setInputValues({
      title: "",
      rating: "",
      posterUrl: "",
      description: "",
    });
  };

  const titleValue = (e) => {
    setInputValues({ ...inputValues, title: e.target.value });
  };

  const ratingValue = (e) => {
    setInputValues({ ...inputValues, rating: e.target.value });
  };

  const posterUrlValue = (e) => {
    setInputValues({ ...inputValues, posterUrl: e.target.value });
  };

  const descriptionValue = (e) => {
    setInputValues({ ...inputValues, description: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={inputValues.title} onChange={titleValue} />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={10}
          step={0.1}
          value={inputValues.rating}
          onChange={ratingValue}
        />
      </div>
      <div>
        <label>Poster Url</label>
        <input
          type="text"
          value={inputValues.posterUrl}
          onChange={posterUrlValue}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea value={inputValues.description} onChange={descriptionValue} />
      </div>
      <Button type="submit">Add Movie</Button>
    </form>
  );
};

export default AddMovie;
