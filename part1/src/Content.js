import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
	console.log(parts, 'parts');
	return (
		<div>
			<Part data={parts.parts[0].name} />
			<Part data={parts.parts[1].name} />
			<Part data={parts.parts[2].name} />
		</div>
	);
};

export default Content;
