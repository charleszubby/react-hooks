import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const DescriptionPage = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <div>
      <Link to="/">
        <IoArrowBackOutline />
      </Link>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>{movie.title}</p>
      <p>{movie.description}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default DescriptionPage;
