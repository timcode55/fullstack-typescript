import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAllPersons = () => {
	return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = (newObject) => {
	axios.post(baseUrl, newObject).then((response) => response.data);
};

const updatePerson = (id, newObject) => {
	axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data);
};

const deletePerson = (id) => {
	axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default {
	getAllPersons,
	createPerson,
	updatePerson,
	deletePerson
};
