"use client";

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
import { Button } from "@/components/ui/button";
import { deleteCourse } from "@/lib/actions/course.actions";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

export function DeleteCourseAlertModal({
	courseId,
	path,
}: {
	path: string;
	courseId: string;
}) {
	const { toast } = useToast();

	const router = useRouter();

	const handleDeleteCourse = async () => {
		await deleteCourse({ courseId, path });
		toast({
			title: "Successfully deleted",
		});
		router.push("/my-courses");
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="bg-red-600 w-full md:w-auto">
					<span className="md:hidden">Delete course</span>
					<Trash className="ml-2 w-4 h-4 md:ml-0" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete the database and no one would have access to the
						course again.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => startTransition(handleDeleteCourse)}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
