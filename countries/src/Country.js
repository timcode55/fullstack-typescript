import { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

const Country = ({ item }) => {
	const [ weather, setWeather ] = useState({});
	const api_key = process.env.REACT_APP_API_KEY;

	useEffect(
		() => {
			axios
				.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${item.capital}`)
				.then((response) => {
					setWeather(response.data);
				});
		},
		[ item.capital, api_key ]
	);

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
			<p>Temperature : '5deg'</p>
		</div>
	);
};

export default Country;
