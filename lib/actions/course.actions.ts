"use server";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import { getUserById } from "./user.actions";
import Course from "../database/models/course.model";
import { revalidatePath } from "next/cache";
import { FetchAllCoursesParams } from "@/types";
import { getAllCategories, getCategoryByName } from "./category.actions";
import RegisteredCourse from "../database/models/registered.model";

import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export async function fetchAllCourses({
	query,
	limit = 10,
	page,
	category,
}: FetchAllCoursesParams) {
	try {
		await connectToDatabase();

		const titleCondition = query
			? {
					$or: [
						{
							name: { $regex: query, $options: "i" },
						},
						{
							description: { $regex: query, $options: "i" },
						},
					],
			  }
			: {};
		const categoryCondition = category
			? await getCategoryByName(category)
			: null;

		const condition = {
			$and: [
				titleCondition,
				categoryCondition ? { category: categoryCondition._id } : {},
			],
		};

		const skipAmount = (Number(page) - 1) * limit;

		const courses = await Course.find(condition)
			.populate("category")
			.sort({ createdAt: "desc" })
			.skip(skipAmount)
			.limit(limit);

		const courseCount = await Course.countDocuments(condition);

		revalidatePath("/my-courses");
		return {
			data: JSON.parse(JSON.stringify(courses)),
			totalPages: Math.ceil(courseCount / limit),
		};
	} catch (error) {
		handleError(error);
	}
}

export async function fetchPublishedCourses({
	query,
	limit = 10,
	page,
	category,
}: FetchAllCoursesParams) {
	try {
		await connectToDatabase();

		const titleCondition = query
			? {
					$or: [
						{
							name: { $regex: query, $options: "i" },
						},
						{
							description: { $regex: query, $options: "i" },
						},
					],
			  }
			: {};
		const categoryCondition = category
			? await getCategoryByName(category)
			: null;

		const condition = {
			$and: [
				titleCondition,
				categoryCondition ? { category: categoryCondition._id } : {},
				{ isPublished: true },
			],
		};

		const skipAmount = (Number(page) - 1) * limit;

		const courses = await Course.find(condition)
			.populate("category")
			.sort({ createdAt: "desc" })
			.skip(skipAmount)
			.limit(limit);

		const courseCount = await Course.countDocuments(condition);

		return {
			data: JSON.parse(JSON.stringify(courses)),
			totalPages: Math.ceil(courseCount / limit),
		};
	} catch (error) {
		handleError(error);
	}
}

export async function getCourseById(id: string) {
	try {
		await connectToDatabase();

		const course = await Course.findById(id).populate("category");

		return JSON.parse(JSON.stringify(course));
	} catch (error) {
		handleError(error);
	}
}

export async function createCourse({
	name,
	userId,
}: {
	name: string;
	userId: string;
}) {
	try {
		await connectToDatabase();

		const user = await getUserById(userId);

		const newCourse = await Course.create({ name, user: user._id });

		revalidatePath("/my-courses");

		return JSON.parse(JSON.stringify(newCourse));
	} catch (error) {
		handleError(error);
	}
}

export async function updateCourse({
	courseId,
	data,
	path,
}: {
	courseId: string;
	data: any;
	path: string;
}) {
	try {
		await connectToDatabase();

		const course = await Course.findById(courseId);

		if (!course) throw new Error("Course not found");

		course.name = data.name || course.name;
		course.description = data.description || course.description;
		course.onlinePrice = data.onlinePrice || course.onlinePrice;
		course.category = data.category || course.category;
		course.weekendPrice = data.weekendPrice || course.weekendPrice;
		course.weekdaysPrice = data.weekdaysPrice || course.weekdaysPrice;
		course.weekendDate = data.weekendDate || course.weekendDate;
		course.weekdaysDate = data.weekdaysDate || course.weekdaysDate;
		course.picture = data.picture || course.picture;

		await course.save();
		revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function unPublishCourse({
	courseId,
	path,
}: {
	courseId: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const course = await Course.findById(courseId);

		if (!course) throw new Error("Course not found");

		course.isPublished = false;

		await course.save();
		revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function publishCourse({
	courseId,
	path,
}: {
	courseId: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const course = await Course.findById(courseId);

		if (!course) throw new Error("Course not found");

		course.isPublished = true;

		await course.save();
		revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function updateCourseLessons({
	courseId,
	content,
	path,
}: {
	courseId: string;
	content: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const course = await Course.findById(courseId);

		if (!course) throw new Error("Course not found");

		const lesson = {
			content,
		};

		course.lessons.push(lesson);
		await course.save();
		revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function deleteCourseLesson({
	courseId,
	lessonId,
	path,
}: {
	courseId: string;
	lessonId: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const course = await Course.findById(courseId);

		if (!course) throw new Error("Course not found");

		course.lessons.pull({ _id: lessonId });

		await course.save();
		revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function applyForCourse({
	email,
	firstName,
	lastName,
	user,
	course,
	phoneNumber,
	description,
	name,
}: {
	email: string;
	firstName: string;
	lastName: string;
	description: string;
	phoneNumber: string;
	name: string;
	user: string;
	course: string;
}) {
	try {
		await connectToDatabase();
		const courseDetails = await Course.findById(course);

		if (!courseDetails) throw new Error("Course not found");

		const student = {
			user,
		};

		courseDetails.students.push(student);

		await courseDetails.save();

		const registered = await RegisteredCourse.create({ user, course });

		if (registered) {
			const request = mailjet.post("send", { version: "v3.1" }).request({
				Messages: [
					{
						From: {
							Email: `${process.env.TEKSKILLUP_SENDER_EMAIL_ADDRESS}`,
							Name: `${process.env.COMPANY_NAME}`,
						},
						To: [
							{
								Email: `${email}`,
								Name: `${firstName}`,
							},
						],
						Subject: `Welcome to your new tech course: ${name}`,
						TextPart: `Successful registration for ${name}`,
						HTMLPart: `<div 
										style="
											font-family: Montserrat, sans-serif;
											font-size: 15px;
											padding: 2rem;
										"
									>
										<h2>Hi, ${firstName}</h2>
	
										<p>Welcome to ${process.env.COMPANY_NAME}</p>
	
										<p>Congratulations on enrolling in ${name}. We’re thrilled to have you join our community of skilled up tech masters.</p>
	
										<h1>Ready to go?</h1>
										<p>Great! You can start your application by sending a chat or phone call to ${process.env.COMPANY_NUMBER}.</p>
	
										<h1>Support</h1>
										<p>If you have any questions or need assistance, our support team is here to help. Feel free to reach out to us at ${process.env.TEKSKILLUP_ADMIN_EMAIL_ADDRESS} or visit our Help Center for FAQs and more.</p>
	
										<h1>Feedback</h1>
										<p>We value your feedback. Once you’ve completed the course, please take a moment to rate and review it. Your insights help us improve and provide the best learning experience for everyone.</p>
	
										<p>Thank you for choosing ${process.env.COMPANY_NAME} for your learning needs. We’re excited to see you grow your skills and knowledge with us.</p>
	
										<p>Happy learning😁</p>
										<p>Best regards,</p>
										<p>${process.env.COMPANY_NAME} Team</p>
										<p>&copy; 2024 ${process.env.COMPANY_NAME}. All Rights Reserved</p>
									</div>
							`,
					},
				],
			});

			// Tekskillup admin email format
			const requestAdmin = mailjet
				.post("send", { version: "v3.1" })
				.request({
					Messages: [
						{
							From: {
								Email: `${process.env.TEKSKILLUP_SENDER_EMAIL_ADDRESS}`,
								Name: `${process.env.COMPANY_NAME}`,
							},
							To: [
								{
									Email: `${process.env.TEKSKILLUP_ADMIN_EMAIL_ADDRESS}`,
									Name: `${process.env.COMPANY_NAME}`,
								},
							],
							Subject: `New Student Registration: ${firstName} ${lastName} for ${name}`,
							TextPart: `${firstName} ${lastName} registered for ${name}`,
							HTMLPart: `<div 
									style="
										font-family: Montserrat, sans-serif;
										font-size: 15px;
										padding: 2rem;
									"
								>
									<h2>Hi, ${process.env.COMPANY_NAME}</h2>

									<p>I hope this message finds you well.</p>

									<p>I wanted to inform you that a new student has registered for a course on our platform. Below are the details of the registration:</p>
									<strong>
									Student Information:
                                    </strong>

									<ul>
                                        <li>
                                            <strong>First name:</strong> ${firstName}
                                        </li>
                                        <li>
                                            <strong>Last name:</strong> ${lastName}
                                        </li>
                                        <li>
                                            <strong>Email address:</strong> ${email}
                                        </li>
                                        <li>
                                            <strong>Phone number:</strong> ${phoneNumber}
                                        </li>
                                    </ul>

									<strong>
									Course Information:
                                    </strong>

									<ul>
                                        <li>
                                            <strong>Course name:</strong> ${name}
                                        </li>
                                        <li>
                                            <strong>Course description:</strong> ${description}
                                        </li>
                                        <li>
                                            <strong>Registration date:</strong> ${registered.createdAt}
                                        </li>
                                    </ul>

									
									<p>This registration indicates our ongoing growth and the increasing interest in our courses. Please ensure that all necessary resources and support are available for the new student to have a smooth and enriching learning experience.</p>

									<p>Thank you for your attention to this matter.</p>

									<p>Best regards,</p>
									<p>${process.env.COMPANY_NAME} Team</p>
									<p>&copy; 2024 ${process.env.COMPANY_NAME}. All Rights Reserved</p>
								</div>
						`,
						},
					],
				});

			// Send email
			request
				.then(() => console.log("User sent"))
				.catch((err: any) => {
					return err;
				});

			requestAdmin
				.then(() => console.log("Admin sent"))
				.catch((err) => {
					console.log(err);
				});
		}
	} catch (error) {
		handleError(error);
	}
}

export async function deleteCourse({
	courseId,
	path,
}: {
	courseId: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const deletedCourse = await Course.findByIdAndDelete(courseId);
		if (deletedCourse) revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}

export async function fetchAllRegisteredCourses() {
	try {
		await connectToDatabase();

		const courses = await RegisteredCourse.find()
			.populate("user")
			.populate("course")
			.sort({
				createdAt: "desc",
			});
		return JSON.parse(JSON.stringify(courses));
	} catch (error) {
		handleError(error);
	}
}
