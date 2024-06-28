import { fetchAllCourses } from "@/lib/actions/course.actions";
import SubHeader from "../_components/SubHeader";
import { CoursesTable } from "./_components/CoursesTable";
import SearchBar from "@/components/SearchBar";
import { SearchParamProps } from "@/types";
import Pagination from "@/components/Pagination";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "My courses | Tekskillup",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchText = (searchParams?.query as string) || "";
	const category = (searchParams?.category as string) || "";

	const courses = await fetchAllCourses({
		query: searchText,
		category,
		page,
		limit: 10,
	});

	return (
		<div>
			<SubHeader
				title="All courses"
				description="Access & manage all the published or drafted courses from here"
			/>
			<SearchBar type="courses" />
			<CoursesTable courses={courses?.data} />
			{courses?.totalPages !== undefined && courses?.totalPages > 1 && (
				<Pagination page={page} totalPages={courses?.totalPages} />
			)}
		</div>
	);
};

export default page;
