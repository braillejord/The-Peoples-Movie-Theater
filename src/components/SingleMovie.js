import React from "react";

function SingleMovie({ description, genre, id, image, rating, ticketPrice, title }) {
    return (
        <div className="singleMovie">
            <span data-tooltip={title} data-position="bottom center">
                <img className="ui centered small image" src={image} />
            </span>
        </div >
    );
}

export default SingleMovie;