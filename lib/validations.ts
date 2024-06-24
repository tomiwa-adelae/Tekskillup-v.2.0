import * as z from "zod";

export const ContactSchema = z.object({
	firstName: z.string().max(2000),
	lastName: z.string().max(2000),
	email: z.string().email(),
	phoneNumber: z.string().min(10).max(12),
	subject: z.string().max(100),
	message: z.string().max(2000),
});

export const CreateCourseSchema = z.object({
	name: z.string().max(100),
});

export const CourseDescriptionSchema = z.object({
	description: z.string().max(5000),
});

export const CourseOnlinePriceSchema = z.object({
	onlinePrice: z.number(),
});

export const CourseWeekendPriceSchema = z.object({
	weekendPrice: z.number(),
});

export const CourseWeekdaysPriceSchema = z.object({
	weekdaysPrice: z.number(),
});

export const CourseWeekdaysDateSchema = z.object({
	weekdaysDate: z.date(),
});

export const CourseWeekendDateSchema = z.object({
	weekendDate: z.date(),
});

export const CourseImageSchema = z.object({
	image: z.string(),
});
