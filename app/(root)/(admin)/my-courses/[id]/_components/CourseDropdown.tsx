"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { useEffect, useState } from "react";
import {
	createCategory,
	getAllCategories,
} from "@/lib/actions/category.actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

type CourseDropdownProps = {
	value?: string;
	onChangeHandler?: () => void;
};

const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
});

const CourseDropdown = ({ value, onChangeHandler }: CourseDropdownProps) => {
	const { toast } = useToast();

	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		const getCategories = async () => {
			const categoryList = await getAllCategories();

			categoryList && setCategories(categoryList as ICategory[]);
		};

		getCategories();
	}, []);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		createCategory({
			name: data.name,
		}).then((category) => {
			setCategories((prevState) => [...prevState, category]);
			toast({
				title: "Category created successfully!",
			});
		});
	}

	return (
		<Select onValueChange={onChangeHandler} defaultValue={value}>
			<SelectTrigger className="select-field">
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				{categories.length > 0 &&
					categories.map((category) => (
						<SelectItem
							key={category._id}
							value={category._id}
							className="select-item p-regular-14"
						>
							{category.name}
						</SelectItem>
					))}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="mt-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Category name..."
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
							className="mt-2"
						>
							{form.formState.isSubmitting ? "Adding..." : "Add"}
						</Button>
					</form>
				</Form>
				{/* <Sheet>
					<SheetTrigger asChild>
						<Button className="w-full" variant="outline">
							Add new category
						</Button>
					</SheetTrigger>
					<SheetContent side={"bottom"}>
						<SheetHeader>
							<SheetTitle>New Category</SheetTitle>
						</SheetHeader>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="mt-4"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder="Category name..."
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
									className="mt-6"
								>
									{form.formState.isSubmitting
										? "Adding..."
										: "Add"}
								</Button>
							</form>
						</Form>
					</SheetContent>
				</Sheet> */}
			</SelectContent>
		</Select>
	);
};

export default CourseDropdown;
