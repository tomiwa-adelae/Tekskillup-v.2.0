import { Document, Schema, model, models } from "mongoose";

// Define the Category interface
interface ICategory extends Document {
	name: string;
}

// Define the Category schema
const CategorySchema = new Schema<ICategory>({
	name: {
		type: String,
		unique: true,
	},
});

// Define the Category model
const Category =
	models.Category || model<ICategory>("Category", CategorySchema);

export default Category;
export type { ICategory };
