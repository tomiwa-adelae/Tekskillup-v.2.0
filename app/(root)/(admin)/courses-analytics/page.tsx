import React from "react";
import SubHeader from "../_components/SubHeader";
import Charts from "./_components/Charts";

const page = () => {
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
