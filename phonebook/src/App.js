import React, { useState } from 'react';
import PersonForm from './PersonForm';
import Search from './Search';
import Persons from './Persons';

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filterName, setFilterName ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		let namesArray = persons.map((item) => {
			return item.name;
		});

		if (namesArray.includes(newName)) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			setPersons([ ...persons, { name: newName, number: newNumber } ]);
		}
		setNewName('');
		setNewNumber('');
	};

	const handleAddName = (e) => {
		setNewName(e.target.value);
	};

	const handleAddNumber = (e) => {
		setNewNumber(e.target.value);
	};

	const handleFilterNames = (e) => {
		setFilterName(e.target.value.toLowerCase());
	};

	// const namesToShow = persons.filter((item) => item.name.includes(filterName));

	return (
		<div>
			<h1>Phonebook</h1>
			<Search persons={persons} filterName={filterName} handleFilterNames={handleFilterNames} />
			<h1>Add A New Entry:</h1>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleAddName={handleAddName}
				handleAddNumber={handleAddNumber}
				handleSubmit={handleSubmit}
			/>
			<h2>Numbers</h2>
			<Persons filterName={filterName} persons={persons} />
		</div>
	);
};

export default App;
