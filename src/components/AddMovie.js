import React from "react";

function AddMovie() {
    return (
        <>
            <h1 className="ui center aligned block header">Add a Movie 🍿</h1>
            <form className="ui container form">
                <div className="two fields">
                    <div className="required field">
                        <label>Movie Title</label>
                        <input type="text" placeholder="Movie Title" />
                    </div>
                    <div className="required field">
                        <label>Movie Image</label>
                        <input type="text" placeholder="Movie Image" />
                    </div>
                </div>
                <div className="three fields">
                    <div className="required field">
                        <label>Movie Rating</label>
                        <select className="ui fluid search dropdown">
                            <option value='G'>G</option>
                            <option value='PG'>PG</option>
                            <option value='PG-13'>PG-13</option>
                            <option value='R'>R</option>
                            <option value='NR'>NR</option>
                        </select>
                    </div>
                    <div className="required field">
                        <label>Movie Genre</label>
                        <select className="ui fluid search dropdown">
                            <option value='comedy'>Comedy</option>
                            <option value='thriller/horror'>Thriller/Horror</option>
                            <option value='action/adventure'>Action/Adventure</option>
                            <option value='family'>Family</option>
                            <option value='romance'>Romance</option>
                        </select>
                    </div>
                    <div className="required field">
                        <label>Movie Ticket Price</label>
                        <input type="number" step="0.01" placeholder="Movie Ticket Price" />
                    </div>
                </div>
                <div className="required field">
                    <label>Movie Description</label>
                    <textarea></textarea>
                </div>
                <button className="ui button" type="submit">Add Movie 🎥</button>
            </form >
        </>
    );
}

export default AddMovie;