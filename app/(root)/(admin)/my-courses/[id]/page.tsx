import CourseDescription from "./_components/CourseDescription";
import CourseHeader from "./_components/CourseHeader";
import CourseName from "./_components/CourseName";
import { BentoGrid } from "@/components/ui/bento-grid";
import CourseOnlinePrice from "./_components/CourseOnlinePrice";
import CourseWeekendPrice from "./_components/CourseWeekendPrice";
import CourseWeekendDate from "./_components/CourseWeekendDate";
import CourseWeekdaysPrice from "./_components/CourseWeekdaysPrice";
import CourseWeekdaysDate from "./_components/CourseWeekdaysDate";
import CourseImage from "./_components/CourseImage";

const page = () => {
	return (
		<div>
			<CourseHeader name={"Backend Development"} />
			<BentoGrid className="mt-12">
				<CourseName />
				<CourseDescription />
				<CourseImage />
				<CourseOnlinePrice />
				<CourseWeekendPrice />
				<CourseWeekendDate />
				<CourseWeekdaysPrice />
				<CourseWeekdaysDate />
			</BentoGrid>
		</div>
	);
};

export default page;
