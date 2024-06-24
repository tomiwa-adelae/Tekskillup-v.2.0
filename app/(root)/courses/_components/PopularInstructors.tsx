"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { popularInstructors } from "@/constants";

const PopularInstructors = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container text-center py-12"
		>
			<TypingSubText
				title="Popular Instructors"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 lg:w-3/4 mx-auto"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				qui temporibus ipsam suscipit sint asperiores tenetur incidunt.
			</motion.p>
			<div className="flex flex-col md:flex-row gap-8 md:gap-4 mt-12">
				{popularInstructors.map(
					(
						{ image, name, facebookURL, twitterURL, instagramURL },
						index
					) => {
						return (
							<motion.div
								variants={fadeIn(
									"right",
									"spring",
									index * 0.5,
									0.75
								)}
								className="flex-1 flex flex-col items-center justify-center gap-3"
								key={index}
							>
								<Image
									src={image}
									alt={name}
									width={1000}
									height={1000}
									className="aspect-auto object-cover rounded-lg"
								/>
								<h4 className="font-bold text-base mt-3">
									{name}
								</h4>
								<div className="flex items-center justify-center gap-4">
									<a
										href={facebookURL}
										className="p-2 rounded-full bg-green-400"
										target="_blank"
									>
										<FacebookIcon className="text-white w-4 h-4" />
									</a>
									<a
										href={twitterURL}
										className="p-2 rounded-full bg-green-400"
										target="_blank"
									>
										<TwitterIcon className="text-white w-4 h-4" />
									</a>
									<a
										href={instagramURL}
										className="p-2 rounded-full bg-green-400"
										target="_blank"
									>
										<InstagramIcon className="text-white w-4 h-4" />
									</a>
								</div>
							</motion.div>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default PopularInstructors;
