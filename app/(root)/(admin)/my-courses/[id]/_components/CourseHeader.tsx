"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

import SubHeader from "../../../_components/SubHeader";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { DeleteCourseAlertModal } from "./DeleteCourseAlertModal";

const CourseHeader = ({ name }: { name: string }) => {
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
					description={"Completed fields (3/9)"}
				/>
			</div>
			<div className="flex items-center w-full justify-between md:justify-end gap-3">
				<motion.div
					className="w-full md:w-auto"
					variants={fadeIn("left", "spring", 0.5, 0.75)}
				>
					<Button className="w-full md:w-auto">
						Publish
						<BadgeCheck className="w-4 h-4 ml-2" />
					</Button>
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
