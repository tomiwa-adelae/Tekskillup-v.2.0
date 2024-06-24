"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { aboutUsBoxes } from "@/constants";

const WhoAreWe = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="py-12 container"
		>
			<div className="flex flex-col md:flex-row items-start justify-between gap-8">
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-1 space-y-4"
				>
					<TypingSubText
						title="Who Are We?"
						textStyles="text-2xl lg:text-3xl"
					/>
					<motion.p
						variants={textVariant(1.2)}
						className="text-xs mt-2 lg:text-sm"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dignissimos magni suscipit veritatis maxime quae!
						Architecto impedit doloribus rerum sapiente, laudantium
						cupiditate itaque ea animi eius aliquam saepe
						repudiandae ipsum alias!
					</motion.p>
					<motion.p
						variants={textVariant(1.4)}
						className="text-xs mt-2 lg:text-sm"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Numquam cumque, neque facilis, ullam sapiente
						asperiores exercitationem dolorem consequuntur tenetur
						aperiam, debitis aut. Modi eveniet voluptates dolore
						pariatur libero architecto dignissimos.
					</motion.p>
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="flex-1"
				>
					<Image
						src="/assets/images/test.jpg"
						alt="Test"
						width={1000}
						height={1000}
						className="aspect-auto rounded-lg"
					/>
				</motion.div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
				{aboutUsBoxes.map(
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
								className="flex-1 flex flex-col items-start justify-center gap-6 border border-gray-300 p-8 rounded-lg min-h-60"
								key={index}
							>
								<div
									className={`p-3 rounded-full w-fit border-2`}
									style={{
										borderColor: color,
										backgroundColor: bgColor,
									}}
								>
									<IconComponent size={30} />
								</div>
								<h4 className="font-bold text-base">{title}</h4>
								<p className="text-xs md:text-sm">
									{description}
								</p>
							</motion.div>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default WhoAreWe;
