import { TypingSubText } from "@/components/CustomTexts";
import { topCourses } from "@/constants";
import CourseCard from "@/components/CourseCard";

const TopCourses = () => {
	return (
		<div className="container py-12">
			<TypingSubText
				title="Top Courses"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<p className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				ullam, labore quasi repellendus quod veritatis voluptates vitae
				consequuntur laborum. Non magnam repellendus doloremque
				veritatis sunt.
			</p>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{topCourses.map(({ price, title, image, id }, index) => {
					return (
						<CourseCard
							price={price}
							image={image}
							id={id}
							title={title}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TopCourses;
