import React from "react";
// import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const TrailerPage = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <div>
      <Link to="/">
        <IoArrowBackOutline />
      </Link>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TrailerPage;
