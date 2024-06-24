"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { ArrowRight, Book, Briefcase } from "lucide-react";
import { popularCategories } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PopularCategories = () => {
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
				title="Popular Categories"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{popularCategories.map((category, index) => {
					return (
						<motion.div
							variants={fadeIn(
								"right",
								"spring",
								index * 0.5,
								0.75
							)}
							className="flex items-center justify-center w-auto gap-3 border border-gray-300 p-2 rounded-lg"
							key={index}
						>
							<div
								className={`p-2 rounded-full w-fit border-2 bg-green-100`}
							>
								<Book size={15} />
							</div>
							<div>
								<p className="font-bold text-xs">
									{category?.title}
								</p>
								<p className="text-xs mt-1">
									{category?.number} Courses
								</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default PopularCategories;
