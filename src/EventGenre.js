import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(() => getData());
	}, [events]);

	const getData = () => {
		const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
		const data = genres.map((genre) => {
			const value = events.filter(({ summary }) =>
				summary.split(' ').includes(genre)
			).length;
			return { name: genre, value };
		});
		return data;
	};

	const colors = ['#008744', '#0057E7', '#D62D20', '#FFA700', '#000000'];
	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					legendType="square"
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index % colors.length]}
							name={entry.name}
						/>
					))}
				</Pie>
				<Legend layout="horizontal" align="center" verticalAlign="top"></Legend>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;
