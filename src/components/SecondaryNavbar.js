import React from "react";
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function SecondaryNavbar({ movies, setMovieList, searchInput, setSearchInput, genreChoice, setGenreChoice }) {
    return (
        <div className="ui secondary menu">
            <a className="item">
                <GenreDropdown
                    movies={movies}
                    setMovieList={setMovieList}
                    genreChoice={genreChoice}
                    setGenreChoice={setGenreChoice}
                />
            </a>
            <div className="right menu">
                <a className="item">
                    <Search
                        movies={movies}
                        setMovieList={setMovieList}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                </a>
            </div>
        </div>
    )
}

export default SecondaryNavbar;