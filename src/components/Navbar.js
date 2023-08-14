import React from "react";
import { NavLink } from "react-router-dom"
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function NavBar() {
    return (
        <nav>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/GenreDropdown">GenreDropdown</NavLink>
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
