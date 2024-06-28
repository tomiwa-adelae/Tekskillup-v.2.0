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
import { deleteCourse } from "@/lib/actions/course.actions";
import { Trash } from "lucide-react";
import { startTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

export function DeleteCourseAlertModal({
	id,
	path,
}: {
	path: string;
	id: string;
}) {
	const { toast } = useToast();
	const handleDeleteCourse = async () => {
		await deleteCourse({ courseId: id, path });
		toast({
			title: "Successfully deleted",
		});
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<div className="flex items-center justify-start p-2 text-red-600">
					<Trash className="mr-2 h-4 w-4" />
					<span className="font-bold text-xs">Delete</span>
				</div>
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
