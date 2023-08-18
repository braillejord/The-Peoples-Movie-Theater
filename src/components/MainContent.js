import React from "react";
import SecondaryNavbar from "./SecondaryNavbar";
import SingleMovie from "./SingleMovie";

function MainContent({ movies, setMovieList, searchInput, setSearchInput, genreChoice, setGenreChoice }) {


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
            <h1 className="now-playing">Now Playing</h1>
            <div className="ui centered grid">
                {
                    movies ? movies.map((movie) => (
                        <SingleMovie
                            className="single-movie"
                            key={movie.id}
                            {...movie}
                        />
                    )) : <h1 className="no-results">No Results Found</h1>
                }
            </ div>
        </>
    );
}

export default MainContent;