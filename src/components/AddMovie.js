import React from "react";

function AddMovie() {
    return (
        <div className="ui form">
            <div className="six fields">
                <div className="field">
                    <label>Movie Title</label>
                    <input type="text" placeholder="Movie Title" />
                </div>
                <div className="field">
                    <label>Movie Image</label>
                    <input type="text" placeholder="Movie Image" />
                </div>
                <div className="field">
                    <label>Movie Rating</label>
                    <input type="text" placeholder="Movie Rating" />
                </div>
                <div className="field">
                    <label>Movie Description</label>
                    <input type="text" placeholder="Movie Description" />
                </div>
                <div className="field">
                    <label>Movie Genre</label>
                    <input type="text" placeholder="Movie Genre" />
                </div>
                <div className="field">
                    <label>Movie Ticket Price</label>
                    <input type="text" placeholder="Movie Ticket Price" />
                </div>
                <div>
                    <label>Submit Movie</label>
                    <button className="ui button" type="submit">🍿</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;