import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";
import MainContent from "./MainContent";
import SelectedMovie from "./SelectedMovie";
import Order from "./Order";

const baseUrl = "http://localhost:3000"
const moviesUrl = baseUrl + '/movies'

function App() {
  const [movieList, setMovieList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [ticketOrder, setTicketOrder] = useState([])

  useEffect(() => {
    fetch(moviesUrl)
      .then(r => r.json())
      .then(data => setMovieList(data))
  }, [])

  return (
    <>
      <Navbar
        movies={movieList}
        setMovieList={setMovieList}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Switch>
        <Route path="/add-movie">
          <AddMovie
            movies={movieList}
            moviesUrl={moviesUrl}
            setMovieList={setMovieList}
          />
        </Route>
        <Route path="/order-details">
          <Order
            ticketOrder={ticketOrder}
          />
        </Route>
        <Route path="/:id">
          <SelectedMovie
            moviesUrl={moviesUrl}
            ticketOrder={ticketOrder}
            setTicketOrder={setTicketOrder}
          />
        </Route>
        <Route exact path="/">
          <MainContent
            movies={movieList.filter((movie) => searchInput ? movie.title.toLowerCase().includes(searchInput.toLowerCase()) : true)}
          />
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
