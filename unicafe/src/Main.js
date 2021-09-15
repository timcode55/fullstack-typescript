import React from 'react';
import Button from './Button';

const Main = ({ click }) => {
	return (
		<div>
			<h1>Give Feedback</h1>
			<Button click={click} text="good" manipulate="add" />
			<Button click={click} text="neutral" manipulate="even" />
			<Button click={click} text="bad" manipulate="subtract" />
		</div>
	);
};

export default Main;
