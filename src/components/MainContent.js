import React from "react";
import SingleMovie from "./SingleMovie";
import SelectedMovie from "./SelectedMovie";
import Order from "./Order";

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
            <SelectedMovie />
            <Order />
        </>
    );
}

export default MainContent;