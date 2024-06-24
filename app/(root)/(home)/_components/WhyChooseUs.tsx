"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Briefcase } from "lucide-react";
import { whyChooseUs } from "@/constants";

const WhyChooseUs = () => {
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
				title="Why Choose Us?"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				qui temporibus ipsam suscipit sint asperiores tenetur incidunt
				id officiis quam, doloribus adipisci vero inventore atque et
				tempore ipsa reprehenderit obcaecati?
			</motion.p>

			<div className="flex flex-col md:flex-row gap-4 mt-12">
				{whyChooseUs.map((why, index) => {
					const IconComponent = why.icon;
					return (
						<motion.div
							variants={fadeIn(
								"right",
								"spring",
								index * 0.5,
								0.75
							)}
							className="flex-1 flex flex-col gap-3"
							key={index}
						>
							<div className="p-2 rounded-full w-fit bg-green-100">
								<IconComponent />
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="font-bold text-base">
									{why.title}
								</h4>
								<p className="text-xs">{why.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default WhyChooseUs;
