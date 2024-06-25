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
import { CreateCourseSchema } from "@/lib/validations";
import { updateCourse } from "@/lib/actions/ourcourse.actions";

const CourseName = ({
	initialValue,
	courseId,
	path,
}: {
	initialValue: string;
	courseId: string;
	path: string;
}) => {
	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<z.infer<typeof CreateCourseSchema>>({
		resolver: zodResolver(CreateCourseSchema),
		defaultValues: {
			name: initialValue || "",
		},
	});

	async function onSubmit(data: z.infer<typeof CreateCourseSchema>) {
		try {
			await updateCourse({ courseId, data, path });

			setIsEditing(!isEditing);
		} catch (error) {
			console.log(error);
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
					<p className="text-xs font-bold uppercase">Course name</p>

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
					{!isEditing && (
						<p className="text-sm mt-4">{initialValue}</p>
					)}
					{isEditing && (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3 mt-2"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder="Write the name of your course..."
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

export default CourseName;
