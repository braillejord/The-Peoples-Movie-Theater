import React from "react";
import { NavLink } from "react-router-dom"
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function NavBar() {
    return (
        <nav>
            {/* <NavLink exact to="/Search">Search</NavLink>
            <NavLink exact to="/GenreDropdown">GenreDropdown</NavLink> */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/add-movie">Add a Movie</NavLink>
            <NavLink exact to="/order-details">Your Order</NavLink>
        </nav>
    );
}

export default NavBar;
// function Navbar() {
//     return (
//         <>
//             <GenreDropdown />
//             <Search />
//         </>
//     );
// }
