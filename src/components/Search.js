import React from 'react';

function Search({ movies, setMovieList, searchInput, setSearchInput }) {

	return (
		<div className="ui search">
			<div className="ui input">
				<input className="prompt" type="text" placeholder="Search movies..." onChange={(e) => setSearchInput(e.target.value)} />
				<i className="search icon"></i>
			</div>
			<div className="results"></div>
		</div>
	);
};

export default Search;



