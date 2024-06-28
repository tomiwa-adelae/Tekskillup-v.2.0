import { Document, Schema, model, models } from "mongoose";

interface IRegisteredCourse extends Document {
	user: Schema.Types.ObjectId;
	course: Schema.Types.ObjectId;
} // Adjust the path accordingly

// Define the RegisteredCourse schema
const RegisteredCourseSchema = new Schema<IRegisteredCourse>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		course: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Course",
		},
	},
	{ timestamps: true }
);

// Define the RegisteredCourse model
const RegisteredCourse =
	models.RegisteredCourse ||
	model<IRegisteredCourse>("RegisteredCourse", RegisteredCourseSchema);

export default RegisteredCourse;
