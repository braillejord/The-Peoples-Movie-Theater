import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";
import MainContent from "./MainContent";

const baseUrl = "http://localhost:3000"
const moviesUrl = baseUrl + '/movies'

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch(moviesUrl)
      .then(r => r.json())
      .then(data => setMovieList(data))
  })

  return (
    <>
      <Navbar />
      <AddMovie />
      <MainContent />
    </>
  );
}

export default App;
