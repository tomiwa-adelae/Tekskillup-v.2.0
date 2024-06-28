import * as z from "zod";

export const ContactSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	phoneNumber: z.string().min(10).max(12),
	subject: z.string().min(2).max(100),
	message: z.string().min(2),
});

export const CreateCourseSchema = z.object({
	name: z.string().max(100),
});

export const CourseDescriptionSchema = z.object({
	description: z.string().max(5000),
});

export const CourseOnlinePriceSchema = z.object({
	onlinePrice: z.string(),
});

export const CourseWeekendPriceSchema = z.object({
	weekendPrice: z.string(),
});

export const CourseWeekdaysPriceSchema = z.object({
	weekdaysPrice: z.string(),
});

export const CourseWeekdaysDateSchema = z.object({
	weekdaysDate: z.date().default(new Date()),
});

export const CourseWeekendDateSchema = z.object({
	weekendDate: z.date().default(new Date()),
});

export const CourseImageSchema = z.object({
	picture: z.string(),
});

export const CourseLessonSchema = z.object({
	content: z.string(),
});

export const CourseCategorySchema = z.object({
	category: z.string(),
});
