import React from 'react';

const Persons = ({ persons, filterName }) => {
	const namesToShow = persons.filter((item) => item.name.toLowerCase().includes(filterName));

	return (
		<div>
			{namesToShow.map((item) => {
				return (
					<p key={item.name}>
						{item.name} {item.number}
					</p>
				);
			})}
		</div>
	);
};

export default Persons;
