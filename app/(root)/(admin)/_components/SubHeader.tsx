"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";

const SubHeader = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
		>
			<TypingSubText
				title={title}
				textStyles="text-green-400 text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4"
			>
				{description}
			</motion.p>
		</motion.div>
	);
};

export default SubHeader;
