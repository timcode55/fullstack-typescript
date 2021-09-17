import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';

function App() {
	const [ countries, setCountries ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ countryDetail, setCountryDetail ] = useState('');

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
			setCountries(res.data);
		});
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleShowClick = (name) => {
		setCountryDetail(name);
	};

	const filterCountries = countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
	const findCountry = countries.filter((country) => country.name === countryDetail);
	const limitCountryDisplay = filterCountries.length > 10;

	return (
		<div className="App">
			<p>
				Find Countries <input onChange={handleSearch} />
			</p>
			{limitCountryDisplay ? (
				'Too many matches, specify another filter'
			) : (
				filterCountries.map((item) => {
					if (filterCountries.length === 1) {
						return <div key={item.alpha3Code}>{<Country item={item} />}</div>;
					}
					return (
						<div>
							<p key={item.alpha3Code}>{item.name}</p>{' '}
							<button value={item.name} onClick={() => handleShowClick(item.name)}>
								show
							</button>
						</div>
					);
				})
			)}
			{countryDetail && <div>{<Country item={findCountry[0]} />}</div>}
		</div>
	);
}

export default App;
