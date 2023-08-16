import React from "react";
import { Link } from "react-router-dom"


function SingleMovie({ description, genre, id, image, rating, ticketPrice, title }) {
    return (
        <Link to={`/${id}`} className="singleMovie">
            <span data-tooltip={title} data-position="bottom center">
                <img className="ui centered small image" src={image} />
            </span>
        </Link>
    );
}

export default SingleMovie;