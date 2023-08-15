import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
  }, [])

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
        <Route exact path="/">
          <MainContent movies={movieList} />
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

// const App = () => {
// 	const [movies, setMovies] = useState([]);
// 	const [searchValue, setSearchValue] = useState('');

// 	const getMovieRequest = async () => {
// 		const moviesUrl = baseUrl + '/movies';

// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest();
// 	}, []);

// 	return (
// 		<div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Movies' />
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList movies={movies} />
// 			</div>
// 		</div>
// 	);
// };

export default App;
