import React from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import SecondaryNavbar from "./SecondaryNavbar";
import SingleMovie from "./SingleMovie";

function MainContent({ movies, setMovieList, searchInput, setSearchInput, genreChoice, setGenreChoice }) {

    const [parent] = useAutoAnimate()

    return (
        <>
            <SecondaryNavbar
                movies={movies}
                setMovieList={setMovieList}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                genreChoice={genreChoice}
                setGenreChoice={setGenreChoice}
            />

            {
                movies.length
                    ?
                    <>
                        <h1 className="now-playing">Now Playing</h1>
                        <div className="ui centered grid" ref={parent}>
                            {movies.map((movie) => (
                                <SingleMovie
                                    className="single-movie"
                                    key={movie.id}
                                    {...movie}
                                />
                            ))}
                        </ div>
                    </>
                    :
                    <div className="ui header centered">
                        <h1 className="no-results">No Results Found</h1>
                    </div>
            }

        </>
    );
}

export default MainContent;