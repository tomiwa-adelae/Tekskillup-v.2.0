"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Folder, MoveUpRight } from "lucide-react";

const JoinNow = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="py-12 container gap-8 flex items-center flex-col md:flex-row"
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				style={{
					backgroundColor: "rgb(199,47,131)",
					backgroundImage:
						"linear-gradient(90deg, rgba(199,47,131,1) 0%, rgba(143,51,94,1) 46%, rgba(128,20,121,1) 100%)",
				}}
				className="w-full relative bg-green-400 px-4 py-6 lg:p-8 text-white rounded-lg flex items-start justify-between gap-4"
			>
				<div className="flex-1 h-36 lg:h-44 flex flex-col items-start justify-between">
					<div>
						<TypingSubText
							title="Join to start learning"
							textStyles="text-xl lg:text-2xl"
						/>
						<motion.p
							variants={textVariant(1.2)}
							className="text-xs mt-2"
						>
							Learn from our quality instructors!
						</motion.p>
					</div>
					<Button className="bg-white text-black" asChild>
						<Link href="/sign-up">
							Get Started <MoveUpRight className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</div>
				<div className="flex items-start justify-end">
					<Image
						src="/assets/icons/learn.svg"
						alt="Learn with us now"
						width={1000}
						height={1000}
						className="w-16 h-16 lg:w-28 lg:h-28"
					/>
				</div>
			</motion.div>
			<motion.div
				variants={fadeIn("left", "tween", 0.2, 1)}
				style={{
					backgroundColor: "rgb(136,198,42)",
					backgroundImage:
						"linear-gradient(90deg, rgba(136,198,42,1) 0%, rgba(79,143,51,1) 46%, rgba(23,136,38,1) 100%)",
				}}
				className="w-full relative bg-green-400 px-4 py-6 lg:p-8 text-white rounded-lg flex items-start justify-between gap-4"
			>
				<div className="flex-1 h-36 lg:h-44 flex flex-col items-start justify-between">
					<div>
						<TypingSubText
							title="Check out our courses"
							textStyles="text-xl lg:text-2xl"
						/>
						<motion.p
							variants={textVariant(1.2)}
							className="text-xs mt-2"
						>
							We have more that 24,000+ courses to choose from
						</motion.p>
					</div>
					<Button className="bg-white text-black" asChild>
						<Link href="/sign-up">
							Explore courses <Folder className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</div>
				<div className="flex items-start justify-end">
					<Image
						src="/assets/icons/browse.svg"
						alt="See our courses"
						width={1000}
						height={1000}
						className="w-16 h-16 lg:w-28 lg:h-28"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default JoinNow;
