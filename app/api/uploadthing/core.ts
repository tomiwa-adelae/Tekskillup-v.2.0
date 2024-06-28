import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
	productImage: f({
		image: { maxFileSize: "4MB", maxFileCount: 1 },
	}).onUploadComplete(async ({ metadata, file }) => {
		const userId = (metadata as any).userId;
	}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
