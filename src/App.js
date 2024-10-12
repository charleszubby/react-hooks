import MovieLIst from "./components/MovieLIst";
import { movies } from "./Movies";
import AddMovie from "./components/AddMovie";
import { Container } from "react-bootstrap";
import Filter from "./components/Filter";
import { useState } from "react";

const App = () => {
  const [originalMovies, setOriginalMovies] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(originalMovies);

  const handleFilterChange = (title, rating) => {
    let filtered = originalMovies;
    if (title && !rating) {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (!title && rating) {
      filtered = movies.filter(
        (movie) => parseFloat(movie.rating) === parseFloat(rating)
      );
    }
    if (title && rating) {
      filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          parseFloat(movie.rating) === parseFloat(rating)
      );
    }
    setFilteredMovies(filtered);
  };
  const addMovieHandler = (inputValues) => {
    setOriginalMovies([...originalMovies, inputValues]);
    setFilteredMovies([...filteredMovies, inputValues]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <div className="d-flex justify-content-around">
                <Filter onFilterChange={handleFilterChange} />
                <AddMovie addMovie={addMovieHandler} />
              </div>
              <MovieLIst movies={filteredMovies} />
            </Container>
          }
        ></Route>
        <Route
          path="/description/:title"
          element={<DescriptionPage movies={filteredMovies} />}
        />
        <Route
          path="/trailer/:title"
          element={<TrailerPage movies={filteredMovies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
