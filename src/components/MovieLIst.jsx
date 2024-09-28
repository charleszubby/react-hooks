import React from "react";
import MovieCard from "./MovieCard";
import { Col, Row } from "react-bootstrap"; // Importing the Col and Row component from react-bootstrap

const MovieLIst = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={3} sm={6}>
          <MovieCard
            key={movie.id}
            posterUrl={movie.posterUrl}
            description={movie.description}
            rating={movie.rating}
            title={movie.title}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MovieLIst;
