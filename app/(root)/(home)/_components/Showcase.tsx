"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";

import Lottie from "lottie-react";
import animationData from "@/public/assets/animations/showcase-animation.json";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

const Showcase = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="flex py-12 items-center justify-center md:justify-between text-center md:text-left flex-col md:flex-row relative gap-4 min-h-[85vh] container"
		>
			<div className="w-full absolute inset-0 h-screen">
				{/* <SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#104F19"
				/> */}
			</div>
			{/* <Spotlight
				className="-top-5 left-0 md:left-30 md:-top-10"
				fill="green"
			/> */}
			<div className="flex-1">
				<motion.h1
					variants={textVariant(1.1)}
					className="text-3xl leading-relaxed md:text-4xl lg:text-5xl md:leading-snug lg:leading-snug font-bold"
				>
					Study Online Swiftly,{" "}
					<span className="bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
						Conveniently
					</span>{" "}
					& Affordable
				</motion.h1>
				<motion.p
					variants={textVariant(1.2)}
					className="text-xs mt-2 lg:text-sm"
				>
					Grow with Online design and development courses. <br />{" "}
					Learn from Industry Experts and enhance your skills.
				</motion.p>
				<motion.div variants={slideIn("left", "tween", 0.2, 1)}>
					<Button className="mt-10" asChild>
						<Link href="/sign-up">
							Get started <MoveUpRight className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</motion.div>
			</div>
			<motion.div
				className="flex-1"
				variants={slideIn("right", "tween", 0.2, 1)}
			>
				{/* <Lottie animationData={animationData} /> */}
			</motion.div>
		</motion.div>
	);
};

export default Showcase;
