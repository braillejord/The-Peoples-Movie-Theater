import React from 'react';

function Search({ setSearchInput }) {

	return (
		<div className="ui search">
			<div className="ui input">
				<input className="prompt" type="text" placeholder="Search movies..." onChange={(e) => setSearchInput(e.target.value)} />
			</div>
			<div className="results"></div>
		</div>
	);
};

export default Search;



