import React from "react";
import SecondaryNavbar from "./SecondaryNavbar";
import SingleMovie from "./SingleMovie";

function MainContent({ movies, setMovieList, searchInput, setSearchInput, genreChoice, setGenreChoice }) {

    let allMovies = movies.map((movie) => (
        <SingleMovie
            className="single-movie"
            key={movie.id}
            {...movie}
        />
    ))

    if (movies.length === 0) {
        allMovies = <h1 className="no-results">No Results Found</h1>
    }

    return (
        <>
            <SecondaryNavbar
                movies={movies}
                setMovieList={setMovieList}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                genreChoice={genreChoice}
                setGenreChoice={setGenreChoice}
            />
            <div className="ui centered grid">
                {allMovies}
            </ div>
        </>
    );
}

export default MainContent;