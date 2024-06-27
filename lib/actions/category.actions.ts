"use server";

import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";
import { handleError } from "../utils";

export const getAllCategories = async () => {
	try {
		await connectToDatabase();

		const categories = await Category.find();

		return JSON.parse(JSON.stringify(categories));
	} catch (error) {
		handleError(error);
	}
};

export const getCategoryByName = async (name: string) => {
	return Category.findOne({ name: { $regex: name, $options: "i" } });
};

export const createCategory = async ({ name }: { name: string }) => {
	try {
		await connectToDatabase();

		const newCategory = await Category.create({ name });

		return JSON.parse(JSON.stringify(newCategory));
	} catch (error) {
		handleError(error);
	}
};
