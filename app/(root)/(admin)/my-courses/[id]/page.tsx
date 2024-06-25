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
import { SearchParamProps } from "@/types";
import { getCourseById } from "@/lib/actions/ourcourse.actions";
import CourseLessons from "./_components/CourseLessons";
import CourseCategory from "./_components/CourseCategory";

interface CourseProp {
	_id: string;
	name: string;
	description: string;
	picture: string;
	onlinePrice: string;
	weekendPrice: string;
	weekdaysPrice: string;
	weekdaysDate: string;
	weekendDate: string;
	isPublished: string;
	category: string;
	lessons: {
		content: string;
	};
}

const page = async ({ params: { id } }: SearchParamProps) => {
	const course: CourseProp = await getCourseById(id);

	return (
		<div>
			<CourseHeader name={course.name} />
			<BentoGrid className="mt-12">
				<CourseName
					initialValue={course.name}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseDescription
					initialValue={course.description}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseImage
					initialValue={course.picture}
					name={course.name}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseLessons
					initialLessons={course.lessons}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseCategory
					initialValue={course.category}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseOnlinePrice
					initialValue={course.onlinePrice}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseWeekendPrice
					initialValue={course.weekendPrice}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseWeekendDate
					initialValue={course.weekendDate}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseWeekdaysPrice
					initialValue={course.weekdaysPrice}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
				<CourseWeekdaysDate
					initialValue={course.weekdaysDate}
					courseId={course._id}
					path={`/my-courses/${course._id}`}
				/>
			</BentoGrid>
		</div>
	);
};

export default page;
