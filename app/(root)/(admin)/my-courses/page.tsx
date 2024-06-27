import { fetchAllCourses } from "@/lib/actions/ourcourse.actions";
import SubHeader from "../_components/SubHeader";
import { CoursesTable } from "./_components/CoursesTable";
import SearchBar from "@/components/SearchBar";
import { SearchParamProps } from "@/types";
import Pagination from "@/components/Pagination";

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

	console.log("courses", courses);

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
