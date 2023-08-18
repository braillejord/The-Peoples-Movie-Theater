import React from "react";

function GenreDropdown({ setGenreChoice }) {

    return (
        <>
            <select className="ui dropdown" onChange={(e) => setGenreChoice(e.target.value)}>
                <option value="All">Filter by Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller/Horror">Thriller/Horror</option>
                <option value="Action/Adventure">Action/Adventure</option>
                <option value="Family">Family</option>
                <option value="Romance">Romance</option>
            </select>
        </>
    )
}

export default GenreDropdown;
