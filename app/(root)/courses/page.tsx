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
import { fetchPublishedCourses } from "@/lib/actions/course.actions";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Our courses | Tekskillup",
};

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
			<UpcomingCourses courses={courses?.data.splice(0, 4)} />
			<SuccessStats />
			<PopularInstructors />
			<FAQs />
			<JoinNow />
		</div>
	);
};

export default page;
