"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { ourTeams } from "@/constants";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { InfiniteMovingTeams } from "@/components/ui/infinite-moving-teams";

const OurTeams = () => {
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
				title="Our Leadership Teams"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</motion.p>

			<div className="mt-16">
				<InfiniteMovingTeams
					teams={ourTeams}
					direction="right"
					speed="slow"
				/>
			</div>
		</motion.div>
	);
};

export default OurTeams;
