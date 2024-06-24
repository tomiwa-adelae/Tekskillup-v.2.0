import SubHeader from "../_components/SubHeader";
import { CoursesTable } from "./_components/CoursesTable";
import SearchBar from "@/components/SearchBar";

const page = () => {
	return (
		<div>
			<SubHeader
				title="All courses"
				description="Access & manage all the published or drafted courses from here"
			/>
			<SearchBar type="courses" />
			<CoursesTable />
		</div>
	);
};

export default page;
