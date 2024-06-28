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
import { deleteCourseLesson } from "@/lib/actions/course.actions";
import { Trash } from "lucide-react";
import { startTransition } from "react";

export function DeleteCourseLessonDialog({
	courseId,
	lessonId,
	path,
}: {
	courseId: string;
	lessonId: string;
	path: string;
}) {
	const handleDeleteLesson = async () => {
		await deleteCourseLesson({ courseId, lessonId, path });
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button size={"icon"} variant={"ghost"}>
					<Trash className="w-4 h-4" />
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
						onClick={() => startTransition(handleDeleteLesson)}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
