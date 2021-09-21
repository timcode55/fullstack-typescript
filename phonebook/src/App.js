import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import Search from './Search';
import Persons from './Persons';
import axios from 'axios';

import memberService from './services/members';
import Notification from './Notification';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filterName, setFilterName ] = useState('');
	const [ updateRender, setUpdateRender ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');

	useEffect(
		() => {
			axios.get('http://localhost:3001/persons').then((response) => {
				setPersons(response.data);
			});
		},
		[ updateRender ]
	);

	const handleSubmit = (e) => {
		e.preventDefault();

		let namesArray = persons.map((item) => {
			return item.name;
		});

		if (namesArray.includes(newName)) {
			alert(`${newName} is already added to the phonebook, replace the old number with a new one?`);
			const findId = async () => {
				const result = await axios
					.get(`http://localhost:3001/persons`)
					.then((response) => response.data.filter((item) => item.name === newName));
				// .catch((error) => {
				// 	alert(`Information on '${newName}' was already deleted from server`);
				// });
				if (result.length === 0) {
					setErrorMessage(`Information on '${newName}' was already deleted from server`);
					alert(`Information on '${newName}' was already deleted from server`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 3000);
				} else {
					memberService.updatePerson(result[0].id, { name: newName, number: newNumber });
					setErrorMessage(`Added or Updated ${newName}`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 3000);
				}

				setUpdateRender(() => !updateRender);
			};
			findId();
		} else {
			memberService.createPerson({ name: newName, number: newNumber });
			setErrorMessage(`Added or Updated ${newName}`);
			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);
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

	const handleDeleteRender = (id) => {
		setPersons([ ...persons.filter((item) => item.id !== id) ]);
	};
	return (
		<div>
			<h1>Phonebook</h1>
			{errorMessage && <Notification message={errorMessage} />}
			<Search persons={persons} filterName={filterName} handleFilterNames={handleFilterNames} />
			<h1>Add A New Entry:</h1>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleAddName={handleAddName}
				handleAddNumber={handleAddNumber}
				handleSubmit={handleSubmit}
			/>
			<h1>Numbers</h1>
			<Persons filterName={filterName} persons={persons} handleDeleteRender={handleDeleteRender} />
		</div>
	);
};

export default App;
