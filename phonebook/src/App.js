import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import Search from './Search';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filterName, setFilterName ] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then((response) => {
			setPersons(response.data);
		});
	}, []);

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
