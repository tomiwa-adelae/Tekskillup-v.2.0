"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { worldClassLearning } from "@/constants";

const WorldClassLearning = () => {
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
				title="World Class Learning for Anyone, Anywhere"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatum facere nobis eligendi sit nemo! Aliquam iste dolorem
				illo similique impedit?
			</motion.p>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
				{worldClassLearning.map(
					({ color, bgColor, title, description, icon }, index) => {
						const IconComponent = icon;
						return (
							<motion.div
								variants={fadeIn(
									"right",
									"spring",
									index * 0.5,
									0.75
								)}
								className="flex-1 text-center flex flex-col items-center justify-center gap-2 p-1 rounded-lg min-h-60"
								key={index}
							>
								<div
									className={`p-3 rounded-lg w-fit border-2`}
									style={{
										borderColor: color,
										background: bgColor,
									}}
								>
									<IconComponent size={30} />
								</div>
								<h4 className="font-bold text-base mt-4">
									{title}
								</h4>
								<p className="text-xs">{description}</p>
							</motion.div>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default WorldClassLearning;
