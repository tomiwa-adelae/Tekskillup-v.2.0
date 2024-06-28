import { fetchAllUsers, getUserById } from "@/lib/actions/user.actions";
import SubHeader from "../_components/SubHeader";
import DashboardBoxes from "./_components/DashboardBoxes";
import { auth } from "@clerk/nextjs";
import { fetchAllCourses } from "@/lib/actions/course.actions";

const page = async () => {
	const { userId } = auth();

	const userInfo = await getUserById(userId!);

	const courses = await fetchAllCourses({
		query: "",
		category: "",
		page: 1,
		limit: 100000,
	});

	const users = await fetchAllUsers({
		query: "",
		page: 1,
		limit: 100000,
	});

	console.log("courses", courses);

	return (
		<div>
			<SubHeader
				title={`Welcome, ${userInfo?.firstName}`}
				description="Access & manage everything from here"
			/>
			<DashboardBoxes
				courses={courses?.data.length}
				users={users?.data.length}
				userCharts={users?.data}
			/>
		</div>
	);
};

export default page;
