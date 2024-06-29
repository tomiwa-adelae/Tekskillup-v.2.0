"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { popularInstructors, upcomingCourses } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { formatDate, formatToNaira } from "@/lib/utils";

const UpcomingCourses = ({
	courses,
}: {
	courses: {
		picture: string;
		name: string;
		onlinePrice: string;
		weekendDate: string;
	}[];
}) => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.4 }}
			className="container text-center py-12"
		>
			<TypingSubText
				title="Upcoming courses"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 lg:w-3/4 mx-auto"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				qui temporibus ipsam suscipit sint asperiores tenetur incidunt.
			</motion.p>
			<div className="flex flex-col gap-3 mt-12">
				{courses.map(
					({ picture, name, weekendDate, onlinePrice }, index) => {
						return (
							<motion.div
								variants={fadeIn(
									"up",
									"spring",
									index * 0.5,
									0.75
								)}
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border border-gray-300 p-2 rounded-lg"
								key={index}
							>
								<div className="flex items-center justify-start gap-4">
									<Image
										src={picture}
										alt={name}
										width={1000}
										height={1000}
										className="aspect-video object-cover rounded-lg w-20 md:w-32"
									/>
									<h4 className="font-bold text-xs md:text-sm text-left truncate">
										{name}
									</h4>
								</div>

								<div className="flex flex-col items-start justify-center gap-2">
									<p className="text-gray-300 text-xs">
										Date
									</p>
									<p className="text-xs font-bold">
										{formatDate(weekendDate)}
									</p>
								</div>

								<div className="flex flex-col items-end justify-center gap-2">
									<p className="text-gray-300 text-xs">
										Price
									</p>
									<p className="text-xs text-green-400 font-bold">
										{formatToNaira(onlinePrice)}
									</p>
								</div>
							</motion.div>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default UpcomingCourses;
