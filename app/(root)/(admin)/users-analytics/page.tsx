import React from "react";
import SubHeader from "../_components/SubHeader";
import Charts from "./_components/Charts";

const page = () => {
	return (
		<div>
			<SubHeader
				title="Users Analytics"
				description="Access & manage the data charts of the users on your platform from here"
			/>
			<Charts />
		</div>
	);
};

export default page;
