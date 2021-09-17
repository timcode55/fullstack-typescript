import React from 'react';
import axios from 'axios';
console.log(process.env.REACT_APP_API_KEY, 'REACT_APP_API_KEY');

const Country = ({ item }) => {
	const getWeather = axios
		.get(`http://api.weatherstack.com/current?access_key='process.env.REACT_APP_API_KEY'&query=${item.capital}`)
		.then((response) => {
			console.log(response.data);
		});

	return (
		<div>
			<h1>{item.name}</h1>
			<div>
				<p>Capital {item.capital}</p>
				<p>Population {item.population}</p>
			</div>
			<h1>Languages</h1>
			<ul>
				{item.languages.map((lang) => {
					return <li key={lang.iso639_2}>{lang.name}</li>;
				})}
			</ul>
			<img src={item.flag} style={{ width: '20vw' }} alt="Country Flag" />
			<h1>Weather in {item.capital}</h1>
			<p>Temperature : </p>
		</div>
	);
};

export default Country;
