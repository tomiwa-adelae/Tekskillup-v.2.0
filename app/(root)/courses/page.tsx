import SuccessStats from "@/components/SuccessStats";
import PopularCategories from "./_components/PopularCategories";
import Showcase from "./_components/Showcase";
import StartLearning from "./_components/StartLearning";
import TopCourses from "./_components/TopCourses";
import FAQs from "@/components/FAQs";
import JoinNow from "@/components/JoinNow";
import PopularInstructors from "./_components/PopularInstructors";
import UpcomingCourses from "./_components/UpcomingCourses";

const page = () => {
	return (
		<div>
			<Showcase />
			<StartLearning />
			<TopCourses />
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
