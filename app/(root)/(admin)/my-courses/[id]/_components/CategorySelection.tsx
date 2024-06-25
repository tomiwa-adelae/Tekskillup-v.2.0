import React, { startTransition, useEffect, useState } from "react";

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

import { ICategory } from "@/lib/database/models/category.model";
import {
	createCategory,
	getAllCategories,
} from "@/lib/actions/category.actions";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategorySelection({
	value,
	onChangehandler,
}: {
	value?: string;
	onChangeHandler?: () => void;
}) {
	const [newCategory, setNewCategory] = useState("");
	const [categories, setCategories] = useState<ICategory[]>([]);

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

	return (
		<Select onValueChange={onChangehandler} defaultValue={value}>
			<SelectTrigger>
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				{categories.length !== 0 &&
					categories.map((category) => (
						<SelectItem key={category._id} value={category._id}>
							{category.name}
						</SelectItem>
					))}
				{categories.length === 0 && (
					<p className="text-xs italic text-center p-4">
						No categories yet
					</p>
				)}

				<div className="mt-4 w-full">
					<AlertDialog>
						<AlertDialogTrigger className="w-full">
							<Button variant="ghost" className="w-full">
								<Plus className="mr-2 w-4 h-4" />
								Add new category
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									New category
								</AlertDialogTitle>
								<AlertDialogDescription>
									<Input
										type="text"
										placeholder="Category name..."
										onChange={(e) =>
											setNewCategory(e.target.value)
										}
									/>
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									onClick={() =>
										startTransition(handleAddCategory)
									}
								>
									Add
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</SelectContent>
		</Select>
	);
}
