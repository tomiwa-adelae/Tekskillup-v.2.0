"use server";
import { CreateUserParams, FetchAllUsersParams } from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { revalidatePath } from "next/cache";

export async function createUser(user: CreateUserParams) {
	try {
		await connectToDatabase();

		const newUser = await User.create(user);

		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		handleError(error);
	}
}

export async function getUserById(userId: string) {
	try {
		await connectToDatabase();

		const user = await User.findOne({ clerkId: userId });

		if (!user) throw new Error("User not found!");

		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		handleError(error);
	}
}

export async function fetchAllUsers({
	query,
	limit = 10,
	page,
}: FetchAllUsersParams) {
	try {
		await connectToDatabase();

		const titleCondition = query
			? {
					$or: [
						{
							firstName: { $regex: query, $options: "i" },
						},
						{
							lastName: { $regex: query, $options: "i" },
						},
						{
							email: { $regex: query, $options: "i" },
						},
					],
			  }
			: {};

		const condition = {
			$and: [titleCondition],
		};

		const skipAmount = (Number(page) - 1) * limit;

		const users = await User.find(condition)
			.sort({ createdAt: "desc" })
			.skip(skipAmount)
			.limit(limit);

		const userCount = await User.countDocuments(condition);

		return {
			data: JSON.parse(JSON.stringify(users)),
			totalPages: Math.ceil(userCount / limit),
		};
	} catch (error) {
		handleError(error);
	}
}

export async function deleteUser({
	userId,
	path,
}: {
	userId: string;
	path: string;
}) {
	try {
		await connectToDatabase();

		const deletedUser = await User.findByIdAndDelete(userId);
		if (deletedUser) revalidatePath(path);
	} catch (error) {
		handleError(error);
	}
}
