"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Briefcase } from "lucide-react";
import { topCategories } from "@/constants";
import { cn } from "@/lib/utils";

const TopCategories = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container py-12"
		>
			<TypingSubText
				title="Top Categories?"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				24,000+ unique online courses list design
			</motion.p>

			<div className="flex flex-wrap gap-4 mt-8">
				{topCategories.map(
					({ color, bgColor, title, number, icon }, index) => {
						const IconComponent = icon;
						return (
							<motion.div
								variants={fadeIn(
									"right",
									"spring",
									index * 0.5,
									0.75
								)}
								className="flex-1 text-center flex flex-col items-center justify-center gap-6 border border-gray-300 p-8 rounded-lg min-h-60"
								key={index}
							>
								<div
									className={`p-3 rounded-full w-fit border-2`}
									style={{
										borderColor: color,
										background: bgColor,
									}}
								>
									<IconComponent size={30} />
								</div>
								<h4 className="font-bold text-base">{title}</h4>
								<p className="text-xs md:text-sm">
									{number} Courses
								</p>
							</motion.div>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default TopCategories;
