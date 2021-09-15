import React, { useState } from 'react';
import Main from './Main';
import Statistics from './Statistics';

const App = () => {
	// save clicks of each button to its own state
	const [ good, setGood ] = useState(null);
	const [ neutral, setNeutral ] = useState(null);
	const [ bad, setBad ] = useState(null);

	const handleClick = (manipulate) => {
		if (manipulate === 'add') {
			setGood(good + 1);
		}
		if (manipulate === 'even') {
			setNeutral(neutral + 1);
		}
		if (manipulate === 'subtract') {
			setBad(bad + 1);
		}
	};

	return (
		<div>
			<Main click={handleClick} />
			{(good || bad || neutral) && <Statistics good={good} neutral={neutral} bad={bad} />}
		</div>
	);
};

export default App;
