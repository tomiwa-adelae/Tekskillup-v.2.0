import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
	if (cached.conn) return cached.conn;

	if (!MONGODB_URI) throw new Error("MONGODB_URI is missing!!!");

	cached.promise =
		cached.promise ||
		mongoose.connect(
			"mongodb+srv://thetommedia:p7rsIZcZyJUXi2BF@tekskillup.worw58s.mongodb.net/?retryWrites=true&w=majority&appName=Tekskillup",
			{
				dbName: "Tekskillup",
				bufferCommands: false,
			}
		);

	cached.conn = await cached.promise;

	return cached.conn;
};
