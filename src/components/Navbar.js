import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <>
            <div id="menu" className="ui menu">
                <div className="header item">
                    <NavLink className="header-link" exact to="/">Home</NavLink>
                </div>
                <a className="item">
                    <NavLink className="header-link" exact to="/add-movie">Add a Movie</NavLink>
                </a>
                {/* <a className="item">
                    <NavLink className="header-link" exact to="/order-details">My Order</NavLink>
                </a> */}
                <div className="right menu">
                    <h1 className="title">The People's Movie Theater</h1>
                </div>
            </div>
        </>
    );
}

export default NavBar;
