import React from "react";
import Showcase from "./_components/Showcase";
import Description from "./_components/Description";
import CourseContents from "./_components/CourseContents";
import SuccessStats from "@/components/SuccessStats";
import { ScrollingCompanies } from "@/components/ScrollingCompanies";

const page = () => {
	return (
		<div>
			<Showcase />
			<Description />
			<CourseContents />
			<ScrollingCompanies />
			<SuccessStats />
		</div>
	);
};

export default page;
