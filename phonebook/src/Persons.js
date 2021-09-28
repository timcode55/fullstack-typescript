import React from 'react';

const Persons = ({ persons, filterName, handleDeleteRender }) => {
	const namesToShow = persons.filter((item) => item.name.toLowerCase().includes(filterName));

	return (
		<div>
			{namesToShow.map((item, i) => {
				return (
					<li className="note" key={item.name}>
						{item.name} {item.number}{' '}
						<button
							onClick={() => {
								handleDeleteRender(item.id);
							}}
						>
							Delete
						</button>
					</li>
				);
			})}
		</div>
	);
};

export default Persons;
