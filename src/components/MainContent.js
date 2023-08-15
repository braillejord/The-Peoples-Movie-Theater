import React from "react";
import SingleMovie from "./SingleMovie";

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