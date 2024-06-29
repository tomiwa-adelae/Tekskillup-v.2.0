"use client";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const Charts = ({
	users,
}: {
	users: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		_id: string;
	}[];
}) => {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	// Extract dates and count occurrences
	const dateCounts = users.reduce((acc: any, user: any) => {
		const date = new Date(user.createdAt).toISOString().split("T")[0]; // Extract date part
		acc[date] = (acc[date] || 0) + 1; // Count occurrences
		return acc;
	}, {});

	// Prepare data for Recharts
	const chartData = Object.keys(dateCounts).map((date) => ({
		date,
		Number: dateCounts[date],
	}));

	return (
		<div className="mt-8">
			<div>
				<ResponsiveContainer width="100%" height={400}>
					{/* <LineChart width={300} height={100} data={chartData}>
						<Line
							type="monotone"
							dataKey="Number"
							stroke="#104F19"
							strokeWidth={2}
						/>
					</LineChart> */}
					<BarChart
						data={chartData}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="name"
							stroke="#888888"
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="Number"
							fill="#104F19"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
					{/* <AreaChart
						width={500}
						height={400}
						data={chartData}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="Number"
							stroke="#104F19"
							fill="#104F19"
						/>
					</AreaChart> */}
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Charts;
