import React from "react";
import SecondaryNavbar from "./SecondaryNavbar";
import SingleMovie from "./SingleMovie";

function MainContent({ movies, setMovieList, searchInput, setSearchInput }) {

    let allMovies = movies.map((movie) => (
        <SingleMovie
            key={movie.id}
            {...movie}
        />
    ))

    if (movies.length === 0) {
        allMovies = <h1>No Results Found</h1>
    }

    return (
        <>
            <SecondaryNavbar
                movies={movies}
                setMovieList={setMovieList}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <div className="ui centered grid">
                {allMovies}
            </ div>
        </>
    );
}

export default MainContent;