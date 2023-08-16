import React from "react";
import SecondaryNavbar from "./SecondaryNavbar";
import SingleMovie from "./SingleMovie";

function MainContent({ movies, setMovieList, searchInput, setSearchInput }) {

    const allMovies = movies.map((movie) => (
        <SingleMovie
            key={movie.id}
            {...movie}
        />
    ))

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