import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAllPersons = () => {
	return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = async (newObject) => {
	await axios.post(baseUrl, newObject).then((response) => response.data);
};

const updatePerson = (id, newObject) => {
	axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data);
};

const deletePerson = ({ id }) => {
	axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const exported = {
	getAllPersons,
	createPerson,
	updatePerson,
	deletePerson
};

export default exported;
