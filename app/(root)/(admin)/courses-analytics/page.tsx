import React from "react";
import SubHeader from "../_components/SubHeader";
import Charts from "./_components/Charts";
import { fetchAllRegisteredCourses } from "@/lib/actions/ourcourse.actions";

const page = async () => {
	const courses = await fetchAllRegisteredCourses();

	console.log(courses);

	return (
		<div>
			<SubHeader
				title="Courses Analytics"
				description="Access & manage the data charts of the courses people have registered for on your platform from here"
			/>
			<Charts />
		</div>
	);
};

export default page;
