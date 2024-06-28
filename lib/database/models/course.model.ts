import { Document, Schema, model, models } from "mongoose";

// Define the Lesson interface
interface ILesson {
	content?: string;
}

// Define the student interface
interface IStudent {
	user?: Schema.Types.ObjectId;
}

// Define the Course interface
interface ICourse extends Document {
	user: Schema.Types.ObjectId;
	category?: Schema.Types.ObjectId;
	name: string;
	description?: string;
	picture?: string;
	onlinePrice?: string;
	weekendPrice?: string;
	weekdaysPrice?: string;
	weekendDate?: string;
	weekdaysDate?: string;
	isPublished: boolean;
	lessons: ILesson[];
	students: IStudent[];
	createdAt?: Date;
	updatedAt?: Date;
}

// Define the Course schema
const CourseSchema = new Schema<ICourse>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		picture: {
			type: String,
		},
		onlinePrice: {
			type: String,
		},
		weekendPrice: {
			type: String,
		},
		weekdaysPrice: {
			type: String,
		},
		weekendDate: {
			type: String,
		},
		weekdaysDate: {
			type: String,
		},
		isPublished: {
			type: Boolean,
			default: false,
			required: true,
		},
		lessons: [
			{
				content: {
					type: String,
				},
			},
		],
		students: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: "User",
				},
			},
		],
	},
	{ timestamps: true }
);

// Define the Course model
const Course = models.Course || model<ICourse>("Course", CourseSchema);

export default Course;
export type { ICourse, ILesson };
