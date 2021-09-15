import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
	return (
		<div>
			<tbody>
				<tr>
					<td>
						<StatisticLine text={'good'} value={good} />
					</td>
				</tr>
				<tr>
					<StatisticLine text={'neutral'} value={neutral} />
				</tr>
				<tr>
					<StatisticLine text={'bad'} value={bad} />
				</tr>
				<tr>
					<StatisticLine text={'all'} value={good + neutral + bad} />
				</tr>
				<tr>
					<StatisticLine text={'average'} value={good * 1 + bad * -1 } />
				</tr>
				<tr>
					<StatisticLine text={'positive'} value={good / (good + neutral + bad)} />
				</tr>
			</tbody>
		</div>
	);
};

export default Statistics;
