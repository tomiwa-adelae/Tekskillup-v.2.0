import { Document, Schema, model, models } from "mongoose";

// Define the Lesson interface
interface ILesson {
	content?: string;
}

// Define the OurCourse interface
interface IOurCourse extends Document {
	user: Schema.Types.ObjectId;
	category: Schema.Types.ObjectId;
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
	createdAt?: Date;
	updatedAt?: Date;
}

// Define the OurCourse schema
const OurCourseSchema = new Schema<IOurCourse>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		category: {
			type: Schema.Types.ObjectId,
			required: true,
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
	},
	{ timestamps: true }
);

// Define the OurCourse model
const OurCourse =
	models.OurCourse || model<IOurCourse>("OurCourse", OurCourseSchema);

export default OurCourse;
export type { IOurCourse, ILesson };
