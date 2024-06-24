"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { successStats } from "@/constants";

const SuccessStats = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="py-12 flex items-center justify-center gap-4 flex-wrap md:justify-between container"
		>
			{successStats.map(({ value, title }, index) => (
				<motion.div
					variants={fadeIn("left", "spring", index * 0.5, 0.75)}
					key={index}
					className="flex flex-col gap-1 items-center justify-center"
				>
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
						{value}
					</h2>
					<p className="text-xs font-medium md:text-sm">{title}</p>
				</motion.div>
			))}
		</motion.div>
	);
};

export default SuccessStats;
