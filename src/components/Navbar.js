import React from "react";
import { NavLink } from "react-router-dom"
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function NavBar({ movies, setMovieList, searchInput, setSearchInput }) {

    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/add-movie">Add a Movie</NavLink>
            <NavLink exact to="/order-details">Your Order</NavLink>
            <GenreDropdown />
            <Search
                movies={movies}
                setMovieList={setMovieList}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
        </nav>
    );
}

export default NavBar;
