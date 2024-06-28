"use client";

import { Pen, Plus, X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { startTransition, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { CourseCategorySchema } from "@/lib/validations";
import { updateCourse } from "@/lib/actions/course.actions";

import { ICategory } from "@/lib/database/models/category.model";
import { Input } from "@/components/ui/input";
import {
	createCategory,
	getAllCategories,
} from "@/lib/actions/category.actions";
import CourseDropdown from "./CourseDropdown";
import { useToast } from "@/components/ui/use-toast";

const CourseCategory = ({
	initialValue,
	courseId,
	path,
}: {
	initialValue: any;
	courseId: string;
	path: string;
}) => {
	const { toast } = useToast();

	const [isEditing, setIsEditing] = useState(false);

	const [newCategory, setNewCategory] = useState("");
	const [categories, setCategories] = useState<ICategory[]>([]);

	const form = useForm<z.infer<typeof CourseCategorySchema>>({
		resolver: zodResolver(CourseCategorySchema),
		defaultValues: {
			category: initialValue || "",
		},
	});

	useEffect(() => {
		const fetchAllCategories = async () => {
			const categoryList = await getAllCategories();

			categoryList && setCategories(categoryList as ICategory[]);
		};
		fetchAllCategories();
	}, []);

	const handleAddCategory = async () => {
		const newlyAddedCategory = await createCategory({
			name: newCategory.trim(),
		});

		setCategories((prevState) => [...prevState, newlyAddedCategory]);
	};

	async function onSubmit(data: z.infer<typeof CourseCategorySchema>) {
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
						Course category
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
					{!isEditing && (
						<p className="text-sm mt-4">{initialValue}</p>
					)}
					{!isEditing && !initialValue && (
						<p className="text-sm mt-4 italic">No category</p>
					)}
					{isEditing && (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3 mt-2"
							>
								<FormField
									control={form.control}
									name="category"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<CourseDropdown
													onChangeHandler={
														field.onChange
													}
													value={field.value}
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

export default CourseCategory;
