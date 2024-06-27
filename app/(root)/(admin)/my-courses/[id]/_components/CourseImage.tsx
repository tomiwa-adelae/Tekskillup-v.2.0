"use client";

import { Button } from "@/components/ui/button";
import { ImageIcon, Pen, X } from "lucide-react";

import { toast, useToast } from "@/components/ui/use-toast";
import { useState } from "react";

import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { updateCourse } from "@/lib/actions/ourcourse.actions";

const CourseImage = ({
	initialValue,
	courseId,
	path,
	name,
}: {
	initialValue: string;
	courseId: string;
	path: string;
	name: string;
}) => {

	const { toast } = useToast();

	const [isEditing, setIsEditing] = useState(false);

	const [imageData, setImageData] = useState("");

	const handleSubmitImage = async (url: any) => {
		console.log("files", url);
		setImageData(url?.[0].url);
		await updateCourse({ courseId, data: { picture: url?.[0].url }, path });

		setIsEditing(!isEditing);
		toast({
			title: "Success",
		});
	};

	return (
		<div
			className={
				"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] space-y-4 hover:border-0"
			}
		>
			<div className="">
				<div className="flex items-center justify-between gap-1">
					<p className="text-xs font-bold uppercase">Course image</p>
					<Button
						size={"sm"}
						variant={"ghost"}
						className=" font-bold text-xs uppercase"
						onClick={() => setIsEditing(!isEditing)}
					>
						{!isEditing && (
							<>
								<Pen className="w-4 h-4 mr-2" />
								Edit
							</>
						)}
						{isEditing && (
							<>
								<X className="w-4 h-4 mr-2" />
								Close
							</>
						)}
					</Button>
				</div>
				<div>
					{isEditing && (
						<>
							{imageData ? (
								<div className="col-span-6 sm:col-span-4 shadow">
									<Image
										src={imageData}
										alt="productImage"
										width="1000"
										height="100"
										className="object-cover w-full h-[250px]"
									/>
								</div>
							) : (
								<UploadDropzone
									endpoint={"productImage"}
									onClientUploadComplete={(url: any) =>
										handleSubmitImage(url)
									}
									onUploadError={(error) => {
										window.alert(`${error?.message}`);
									}}
									className="mt-4 ut-button:bg-green-400 ut-button:ut-readying:bg-green-400/50 ut-label:text-green-400"
								/>
							)}
						</>
					)}
					{!isEditing && !initialValue && (
						<div className="flex items-center justify-center flex-col gap-4 h-60 rounded-lg mt-2">
							<ImageIcon className="w-10 h-10" />
							<p className="text-xs italic">No image</p>
						</div>
					)}
					{!isEditing && initialValue && (
						<Image
							src={initialValue}
							alt={name}
							width={1000}
							height={1000}
							className="object-cover aspect-video rounded-lg mt-2"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseImage;
