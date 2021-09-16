import React from 'react';

const Search = ({ filterName, handleFilterNames }) => {
	return (
		<div>
			<p>
				Filter shown with <input value={filterName} onChange={handleFilterNames} />
			</p>
		</div>
	);
};

export default Search;
