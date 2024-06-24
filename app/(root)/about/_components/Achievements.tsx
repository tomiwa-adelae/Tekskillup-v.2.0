"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { achievements } from "@/constants";

const Achievements = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container py-12 bg-green-100"
		>
			<TypingSubText
				title="Achievements"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatum facere nobis eligendi sit nemo
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
				{achievements.map(
					({ color, bgColor, title, description, icon }, index) => {
						const IconComponent = icon;
						return (
							<motion.div
								variants={slideIn(
									"right",
									"tween",
									index * 0.5,
									0.75
								)}
								className="bg-white flex-1 flex flex-col items-start justify-center gap-2 p-6 rounded-lg min-h-60"
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

export default Achievements;
