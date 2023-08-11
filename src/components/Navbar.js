import React from "react";
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function Navbar() {
    return (
        <>
            <GenreDropdown />
            <Search />
        </>
    );
}

export default Navbar;