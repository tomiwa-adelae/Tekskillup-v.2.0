"use client";

import { staggerContainer } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { featuredCourses } from "@/constants";
import CourseCard from "@/components/CourseCard";

const FeaturedCourses = ({
	courses,
}: {
	courses: {
		_id: string;
		name: string;
		description: string;
		onlinePrice: string;
		picture: string;
		weekendPrice: string;
		weekdaysPrice: string;
		category: { name: string };
		students: { user: string }[];
	}[];
}) => {
	return (
		<div className="container py-12">
			<TypingSubText
				title="Featured Courses"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<p className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				ullam, labore quasi repellendus quod veritatis voluptates vitae
				consequuntur laborum. Non magnam repellendus doloremque
				veritatis sunt.
			</p>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{courses?.map(
					(
						{
							onlinePrice,
							name,
							picture,
							_id,
							description,
							weekendPrice,
							weekdaysPrice,
							category,
							students,
						},
						index
					) => {
						return (
							<CourseCard
								onlinePrice={onlinePrice}
								picture={picture}
								id={_id}
								name={name}
								description={description}
								weekendPrice={weekendPrice}
								weekdaysPrice={weekdaysPrice}
								category={category?.name}
								key={index}
								students={students.length}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default FeaturedCourses;
