import React from 'react';
import memberServices from './services/members';
import axios from 'axios';

const Persons = ({ persons, filterName, handleDeleteRender }) => {
	const namesToShow = persons.filter((item) => item.name.toLowerCase().includes(filterName));
	// const nameToDelete = persons.filter((name) => (name.id = id));

	const handleDelete = async (name) => {
		const result = await axios
			.get(`http://localhost:3001/persons`)
			.then((response) => response.data.filter((item) => item.name === name))
			.then((del) => del[0].id);
		memberServices.deletePerson(result);
	};

	return (
		<div>
			{namesToShow.map((item, i) => {
				return (
					<li className="note" key={item.name}>
						{item.name} {item.number}{' '}
						<button
							onClick={() => {
								handleDelete(item.name);
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
