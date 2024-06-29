"use client";
import { TypingSubText } from "@/components/CustomTexts";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { Spotlight } from "@/components/ui/spotlight";

export default function SparklesPreview() {
	return (
		<>
			<motion.div
				// @ts-ignore
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="space-y-4 min-h-[70vh] text-center container flex items-center relative z-20 justify-center flex-col dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
			>
				<TypingSubText
					title="Success"
					textStyles="text-4xl md:text-5xl lg:text-7xl text-green-400 "
				/>
				<motion.p variants={textVariant(1.2)} className="text-sm">
					You have successfully registered for the course. Our team
					would reach out to you very soon.
				</motion.p>

				<motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
					<Button asChild className="mt-6">
						<Link href="/">Go back home</Link>
					</Button>
				</motion.div>
			</motion.div>
			{/* <div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#104F19"
				/>
			</div> */}

			<Spotlight
				className="-top-5 left-0 md:left-30 md:-top-10"
				fill="green"
			/>
		</>
	);
}
