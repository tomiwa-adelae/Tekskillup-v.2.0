import { getUserById } from "@/lib/actions/user.actions";
import SubHeader from "../_components/SubHeader";
import DashboardBoxes from "./_components/DashboardBoxes";
import { auth } from "@clerk/nextjs";
import { fetchAllCourses } from "@/lib/actions/ourcourse.actions";
import { SearchParamProps } from "@/types";

const page = async ({ searchParams }: any) => {
	const { userId } = auth();

	// const page = Number(searchParams?.page) || 1;
	// const searchText = Number(searchParams?.query as string) || "";

	const userInfo = await getUserById(userId!);

	const courses = await fetchAllCourses();

	console.log("courses", courses);

	return (
		<div>
			<SubHeader
				title={`Welcome, ${userInfo.firstName}`}
				description="Access & manage everything from here"
			/>
			<DashboardBoxes />
		</div>
	);
};

export default page;
