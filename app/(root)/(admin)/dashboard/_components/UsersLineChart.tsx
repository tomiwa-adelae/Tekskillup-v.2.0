"use client";
import {
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

const UsersLineChart = ({ users }: any) => {
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
		<div className="absolute bottom-0 right-0 w-full flex justify-end">
			<ResponsiveContainer width="40%" height={100}>
				<LineChart width={300} height={100} data={chartData}>
					<Line
						type="monotone"
						dataKey="Number"
						stroke="#104F19"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default UsersLineChart;
