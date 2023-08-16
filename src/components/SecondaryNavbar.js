import React from "react";
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function SecondaryNavbar({ movies, setMovieList, searchInput, setSearchInput }) {
    return (
        <div className="ui secondary menu">
            <a className="item">
                <GenreDropdown />
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