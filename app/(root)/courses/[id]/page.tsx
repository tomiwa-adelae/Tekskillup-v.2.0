import React from "react";
import Showcase from "./_components/Showcase";
import Description from "./_components/Description";
import CourseContents from "./_components/CourseContents";
import SuccessStats from "@/components/SuccessStats";
import { ScrollingCompanies } from "@/components/ScrollingCompanies";
import { getCourseById } from "@/lib/actions/course.actions";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

type CourseProp = {
	name: string;
	description: string;
	onlinePrice: string;
	weekendPrice: string;
	weekdaysPrice: string;
	weekdaysDate: string;
	weekendDate: string;
	category: { name: string };
	picture: string;
	_id: string;
	lessons: { content: string }[];
	students: { user: string }[];
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
	const course: CourseProp = await getCourseById(id);

	const { userId } = auth();

	const userInfo = await getUserById(userId!);

	return (
		<div>
			<Showcase
				name={course.name}
				description={course.description}
				course={course._id}
				user={userInfo._id}
				email={userInfo.email}
				phoneNumber={userInfo.phoneNumber}
				firstName={userInfo.firstName}
				lastName={userInfo.lastName}
			/>
			<Description
				description={course.description}
				picture={course.picture}
				name={course.name}
				students={course.students}
			/>
			<CourseContents
				lessons={course.lessons}
				course={course._id}
				user={userInfo._id}
			/>
			<ScrollingCompanies />
			<SuccessStats />
		</div>
	);
};

export default page;
