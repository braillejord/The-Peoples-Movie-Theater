import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <>
            <div className="ui menu">
                <div className="header item">
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <a className="item">
                    <NavLink exact to="/add-movie">Add a Movie</NavLink>
                </a>
                <a className="item">
                    <NavLink exact to="/order-details">My Order</NavLink>
                </a>
            </div>
        </>
    );
}

export default NavBar;
