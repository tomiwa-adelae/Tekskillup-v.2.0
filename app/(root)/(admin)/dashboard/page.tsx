import SubHeader from "../_components/SubHeader";
import DashboardBoxes from "./_components/DashboardBoxes";

const page = () => {
	return (
		<div>
			<SubHeader
				title="Welcome, Adrian"
				description="Access & manage everything from here"
			/>
			<DashboardBoxes />
		</div>
	);
};

export default page;
