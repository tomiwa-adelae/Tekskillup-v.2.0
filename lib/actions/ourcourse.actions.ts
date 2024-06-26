"use server";
import { GetAllCourseParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import { getUserById } from "./user.actions";
import OurCourse from "../database/models/ourcourse.model";
import { revalidatePath } from "next/cache";

export async function fetchAllCourses() {
	try {
		await connectToDatabase();

		const courses = await OurCourse.find();

		return JSON.parse(JSON.stringify(courses));
	} catch (error) {
		handleError(error);
	}
}

export async function getCourseById(id: string) {
	try {
		await connectToDatabase();

		const course = await OurCourse.findById(id);

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

		const newCourse = await OurCourse.create({ name, user: user._id });
		console.log(newCourse);

		// return JSON.parse(JSON.stringify(newCourse));
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

		const course = await OurCourse.findById(courseId);

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

		const course = await OurCourse.findById(courseId);

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
