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
import { deleteUser } from "@/lib/actions/user.actions";
import { Trash } from "lucide-react";
import { startTransition } from "react";

export function DeleteUserAlertModal({
	id,
	path,
}: {
	path: string;
	id: string;
}) {
	const handleDeleteUser = async () => {
		await deleteUser({ userId: id, path });
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
						user again.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => startTransition(handleDeleteUser)}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
