import React from 'react';

const Course = ({ courses }) => {
	const total = courses.parts
		.map((item) => {
			return item.exercises;
		})
		.reduce((acc, val) => {
			return acc + val;
		});

	return (
		<div>
			{courses.parts.map((item) => {
				return (
					<div key={item.id}>
						<p>
							{item.name} {item.exercises}
						</p>
					</div>
				);
			})}
			<p>
				<b>Total of {total} Exercises</b>
			</p>
		</div>
	);
};

export default Course;
