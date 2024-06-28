"use server";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import { getUserById } from "./user.actions";
import Course from "../database/models/course.model";
import { revalidatePath } from "next/cache";
import { FetchAllCoursesParams } from "@/types";
import { getAllCategories, getCategoryByName } from "./category.actions";
import RegisteredCourse from "../database/models/registered.model";

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

		console.log("isPublished", data, course);

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

		console.log("Yes, we gat it");
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

		console.log("Yes, we gat it");
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
	user,
	course,
}: {
	user: string;
	course: string;
}) {
	try {
		await connectToDatabase();

		await RegisteredCourse.create({ user, course });
	} catch (error) {
		handleError(error);
	}
}

export async function fetchAllRegisteredCourses() {
	try {
		await connectToDatabase();

		const courses = await RegisteredCourse.find().populate("user").sort({
			createdAt: "desc",
		});
		return JSON.parse(JSON.stringify(courses));
	} catch (error) {
		handleError(error);
	}
}
