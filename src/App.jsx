import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  

  // get All movies from API
  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=94bee77a87b90434841fa49f6e1379ae&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setNumberOfPages(res.data.total_pages);
    
  };

  // load All movies evrey render
  useEffect(() => {
    getAllMovies();
  }, [page]);

  // search handeling
  const search = async (title) => {
    if (title == "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=94bee77a87b90434841fa49f6e1379ae&query=${title}`
      );
      setMovies(res.data.results);
      setNumberOfPages(res.data.total_pages);
    }
  };

  const onPageChange = (par) => {
    setPage(par);
  };

  return (
    <>
      <BrowserRouter>
        <Header search={search} />
        <Routes>
          <Route
            path="/"
            element={
              <Movies
                numberOfPages={numberOfPages}
                onPageChange={onPageChange}
                movies={movies}
              />
            }
          />
          <Route path="movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>

        {movies.length == 0 ? (
          <h2 className="container text-danger">لايوجد افلام ...</h2>
        ) : (
          ""
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
