import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";
import MainContent from "./MainContent";
import SelectedMovie from "./SelectedMovie";

const baseUrl = "http://localhost:3000"
const moviesUrl = baseUrl + '/movies'

function App() {
  const [movieList, setMovieList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [genreChoice, setGenreChoice] = useState("All")

  useEffect(() => {
    fetch(moviesUrl)
      .then(r => r.json())
      .then(data => setMovieList(data))
  }, [])

  let filteredMovies;

  if (genreChoice === "All") {
    filteredMovies = movieList
  } else {
    filteredMovies = movieList.filter((movie) => movie.genre === genreChoice)
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/add-movie">
          <AddMovie
            movies={movieList}
            moviesUrl={moviesUrl}
            setMovieList={setMovieList}
          />
        </Route>
        <Route path="/:id">
          <SelectedMovie
            moviesUrl={moviesUrl}
          />
        </Route>
        <Route exact path="/">
          <MainContent
            movies={filteredMovies.filter((movie) => searchInput ? movie.title.toLowerCase().includes(searchInput.toLowerCase()) : true)}
            setMovieList={setMovieList}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            genreChoice={genreChoice}
            setGenreChoice={setGenreChoice}
          />
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
