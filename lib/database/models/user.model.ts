import { Document, Schema, model, models } from "mongoose";

// Define the User interface
interface IUser extends Document {
	clerkId: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	picture: string;
	isAdmin: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

const UserSchema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
