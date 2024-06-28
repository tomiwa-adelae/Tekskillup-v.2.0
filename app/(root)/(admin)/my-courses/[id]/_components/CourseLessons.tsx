"use client";

import { Pen, X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CourseLessonSchema } from "@/lib/validations";
import { updateCourseLessons } from "@/lib/actions/course.actions";
import { DeleteCourseLessonDialog } from "./DeleteCourseLessonDialog";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const CourseLessons = ({
	initialLessons,
	courseId,
	path,
}: {
	initialLessons?: any;
	courseId: string;
	path: string;
}) => {
	const { toast } = useToast();

	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<z.infer<typeof CourseLessonSchema>>({
		resolver: zodResolver(CourseLessonSchema),
		defaultValues: {
			content: "",
		},
	});

	async function onSubmit(data: z.infer<typeof CourseLessonSchema>) {
		try {
			await updateCourseLessons({
				courseId,
				content: data.content,
				path,
			});

			setIsEditing(!isEditing);
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Something went wrong",
			});
		}
	}

	return (
		<div
			className={
				"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] space-y-4 hover:border-0"
			}
		>
			<div className="">
				<div className="flex items-center justify-between gap-1">
					<p className="text-xs font-bold uppercase">
						Course lessons
					</p>

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
					<div className="flex items-center justify-start gap-2 flex-col w-full mt-4">
						{!isEditing &&
							initialLessons.map(
								(
									lesson: { content: string; _id: string },
									index: number
								) => (
									<div className="w-full" key={index}>
										<Separator />
										<div className="py-2 px-4 flex items-center justify-between">
											<p className="text-sm">
												{lesson.content}
											</p>
											<DeleteCourseLessonDialog
												lessonId={lesson._id}
												courseId={courseId}
												path={path}
											/>
										</div>
									</div>
								)
							)}
					</div>
					{!isEditing && initialLessons?.length === 0 && (
						<p className="text-sm mt-4 italic">No lessons yet</p>
					)}
					{isEditing && (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3 mt-2"
							>
								<FormField
									control={form.control}
									name="content"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder="Write the lesson of your course..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									disabled={form.formState.isSubmitting}
									type="submit"
								>
									{form.formState.isSubmitting
										? "Updating..."
										: "Update"}
								</Button>
							</form>
						</Form>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseLessons;
