import React from "react";
import { NavLink } from "react-router-dom"
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function NavBar({ movies, setMovieList, searchInput, setSearchInput }) {

    return (
        <div class="ui menu">
            <div class="header item">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <a class="item">
                <NavLink exact to="/add-movie">Add a Movie</NavLink>
            </a>
            <a class="item">
                <NavLink exact to="/order-details">Your Order</NavLink>
            </a>
            <a class="item">
                <GenreDropdown />
            </a>
            <a class="item">
                <Search
                    movies={movies}
                    setMovieList={setMovieList}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </a>
        </div>
    );
}

export default NavBar;
