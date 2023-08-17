import React, { useState } from "react";
import GenreDropdown from "./GenreDropdown";

const SelectedMovie = ({ name, genre }) => (
    <div className="item-container">
        <div>
            <span className="item-label">Name:</span>
            {name}
        </div>
        <div>
            <span className="item-label">Genre:</span>
            {genre}
        </div>
    </div>
);

const App = () => {
    const [value, setValue] = useState("Horror");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>
                What Movie Genre do you Want to See?
                <select value={value} onChange={handleChange} className="ui dropdown">
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Family">Family</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                </select>
            </label>
            <p>We choose {value}!</p>
            <SelectedMovie name="Example Movie" genre={value} />
        </div>
    );
};

export default GenreDropdown;
