import React from "react";
import SingleMovie from "./SingleMovie";
import { Switch, Route } from "react-router-dom";
import SelectedMovie from "./SelectedMovie";

function MainContent({ movies }) {

    const allMovies = movies.map((movie) => (
        <SingleMovie
            key={movie.id}
            {...movie}
        />
    ))

    return (
        <>
            <div className="ui centered grid">
                {allMovies}
            </ div>
        </>
    );
}

export default MainContent;