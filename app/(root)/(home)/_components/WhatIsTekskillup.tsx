"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import animationData from "@/public/assets/animations/showcase-animation.json";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

const WhatIsTekskillup = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="flex flex-col gap-4 md:flex-row items-start justify-between text-center md:text-left container py-12"
		>
			<motion.div
				className="flex-1"
				variants={slideIn("left", "tween", 0.2, 1)}
			>
				<Image
					src={"/assets/images/who-we-are.jpg"}
					alt="Who we are"
					height={1000}
					width={1000}
					className="aspect-auto object-cover rounded-lg"
				/>
			</motion.div>
			<div className="flex-1">
				<TypingSubText
					title="What is Tekskillup?"
					textStyles="text-2xl lg:text-3xl"
				/>
				<motion.p
					variants={textVariant(1.2)}
					className="text-xs lg:text-sm mt-4 mx-auto"
				>
					Tekskillup is a platform that allows educators to create
					online classes whereby they can store the course materials
					online, manage assignments, quizzes and exams; monitor due
					datesl grade results and provide students with feedback all
					in one place
				</motion.p>
				<motion.div variants={slideIn("right", "tween", 0.2, 1)}>
					<Button variant={"link"} className="mt-10" asChild>
						<Link href="/about">
							Learn more <MoveRight className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default WhatIsTekskillup;
