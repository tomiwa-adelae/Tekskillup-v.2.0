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
import { CourseDescriptionSchema } from "@/lib/validations";
import { updateCourse } from "@/lib/actions/course.actions";
import { useToast } from "@/components/ui/use-toast";

const CourseDescription = ({
	initialValue,
	courseId,
	path,
}: {
	initialValue: string;
	courseId: string;
	path: string;
}) => {
	const { toast } = useToast();

	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<z.infer<typeof CourseDescriptionSchema>>({
		resolver: zodResolver(CourseDescriptionSchema),
		defaultValues: {
			description: initialValue || "",
		},
	});

	async function onSubmit(data: z.infer<typeof CourseDescriptionSchema>) {
		try {
			await updateCourse({ courseId, data, path });

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
						Course description
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
					{!isEditing && initialValue !== undefined && (
						<p className="text-sm mt-4">{initialValue}</p>
					)}
					{!isEditing && !initialValue && (
						<p className="text-sm mt-4 italic">No description</p>
					)}
					{isEditing && (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3 mt-2"
							>
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder="Write the description of your course..."
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

export default CourseDescription;
