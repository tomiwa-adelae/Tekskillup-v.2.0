"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

import SubHeader from "../../../_components/SubHeader";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { DeleteCourseAlertModal } from "./DeleteCourseAlertModal";
import {
	publishCourse,
	unPublishCourse,
	updateCourse,
} from "@/lib/actions/ourcourse.actions";
import { useToast } from "@/components/ui/use-toast";

const CourseHeader = ({
	name,
	completedText,
	isComplete,
	isPublished,
	path,
	courseId,
}: {
	name: string;
	path: string;
	courseId: string;
	isComplete: boolean;
	isPublished: boolean;
	completedText: string;
}) => {
	const { toast } = useToast();

	return (
		<motion.div // @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
		>
			<div className="w-full">
				<SubHeader
					title={name}
					description={`Completed fields (${completedText})`}
				/>
			</div>
			<div className="flex items-center w-full justify-between md:justify-end gap-3">
				<motion.div
					className="w-full md:w-auto"
					variants={fadeIn("left", "spring", 0.5, 0.75)}
				>
					{isPublished && (
						<Button
							disabled={!isComplete}
							className="w-full md:w-auto"
							variant={"ghost"}
							onClick={async () => {
								try {
									await unPublishCourse({
										courseId,
										path,
									});
									toast({
										title: "Success",
									});
								} catch (error) {
									toast({
										variant: "destructive",
										title: "Something went wrong.",
									});
								}
							}}
						>
							Unpublish
							<BadgeCheck className="w-4 h-4 ml-2" />
						</Button>
					)}
					{!isPublished && (
						<Button
							disabled={!isComplete}
							className="w-full md:w-auto"
							onClick={async () => {
								try {
									await publishCourse({
										courseId,
										path,
									});
									toast({
										title: "Success",
									});
								} catch (error) {
									toast({
										variant: "destructive",
										title: "Something went wrong.",
									});
								}
							}}
						>
							Publish
							<BadgeCheck className="w-4 h-4 ml-2" />
						</Button>
					)}
				</motion.div>
				<motion.div
					className="w-full md:w-auto"
					variants={fadeIn("left", "spring", 0.75, 0.75)}
				>
					<DeleteCourseAlertModal />
				</motion.div>
			</div>
		</motion.div>
	);
};

export default CourseHeader;
