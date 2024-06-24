"use client";

import { motion } from "framer-motion";
import {
	fadeIn,
	slideIn,
	staggerContainer,
	textVariant,
	zoomIn,
} from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { courseContents } from "@/constants";
import { MovingBorderButton } from "@/components/ui/moving-border";

const CourseContents = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="py-12 container"
		>
			<TypingSubText
				title="Course content"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.3)}
				className="text-xs text-center lg:text-sm mt-4 text-gray-600"
			>
				The following are what you will learn in this course
			</motion.p>
			<div className="flex flex-col gap-2 mt-8">
				{courseContents.map(({ content }, index) => (
					<motion.p
						variants={fadeIn("up", "spring", index * 0.5, 0.75)}
						key={index}
						className="text-xs p-4 rounded-lg bg-gray-100"
					>
						{content}
					</motion.p>
				))}
			</div>
			<motion.div variants={zoomIn(0.2, 1)} className="mt-8 text-center">
				<MovingBorderButton className="bg-white uppercase font-bold text-green-400 dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 text-xs">
					Click to apply
				</MovingBorderButton>
			</motion.div>
		</motion.div>
	);
};

export default CourseContents;
