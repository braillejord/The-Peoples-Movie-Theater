import React from "react";
import GenreDropdown from "./GenreDropdown";
import Search from "./Search";

function SecondaryNavbar({ setSearchInput, setGenreChoice }) {
    return (
        <div className="ui secondary menu">
            <a className="item">
                <GenreDropdown
                    setGenreChoice={setGenreChoice}
                />
            </a>
            <div className="right menu">
                <a className="item">
                    <Search
                        setSearchInput={setSearchInput}
                    />
                </a>
            </div>
        </div>
    )
}

export default SecondaryNavbar;