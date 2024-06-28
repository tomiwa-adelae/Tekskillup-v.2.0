import SuccessStats from "@/components/SuccessStats";
import PopularCategories from "./_components/PopularCategories";
import Showcase from "./_components/Showcase";
import StartLearning from "./_components/StartLearning";
import TopCourses from "./_components/TopCourses";
import FAQs from "@/components/FAQs";
import JoinNow from "@/components/JoinNow";
import PopularInstructors from "./_components/PopularInstructors";
import UpcomingCourses from "./_components/UpcomingCourses";
import { SearchParamProps } from "@/types";
import { fetchPublishedCourses } from "@/lib/actions/ourcourse.actions";

const page = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchText = (searchParams?.query as string) || "";
	const category = (searchParams?.category as string) || "";

	const courses = await fetchPublishedCourses({
		query: searchText,
		category,
		page,
		limit: 10,
	});

	console.log("courses", courses?.data);

	return (
		<div>
			<Showcase />
			<StartLearning />
			<TopCourses
				courses={courses?.data}
				totalPages={courses?.totalPages!}
				page={page}
			/>
			<PopularCategories />
			<UpcomingCourses />
			<SuccessStats />
			<PopularInstructors />
			<FAQs />
			<JoinNow />
		</div>
	);
};

export default page;
