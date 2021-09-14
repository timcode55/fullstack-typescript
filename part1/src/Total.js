import React from 'react';

const Total = ({ sum }) => {
	return (
		<div>
			<h1>{sum.parts[0].exercises + sum.parts[1].exercises + sum.parts[2].exercises}</h1>
		</div>
	);
};

export default Total;
