"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { coursesAdvantages } from "@/constants";
import { Separator } from "@/components/ui/separator";

const StartLearning = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container  py-12"
		>
			<div className="flex items-start flex-col md:flex-row gap-8">
				<div className="flex-1 text-center md:text-left">
					<TypingSubText
						title="Start learning from the best platform"
						textStyles="text-center md:text-left text-2xl lg:text-3xl"
					/>
					<motion.p
						variants={textVariant(1.2)}
						className="text-xs mt-2 lg:text-sm"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur laudantium ut facilis, consectetur atque
						perferendis numquam deserunt facere porro repudiandae.
					</motion.p>
					<motion.div variants={slideIn("left", "tween", 0.2, 1)}>
						<Button className="mt-10" asChild>
							<Link href="/sign-up">
								Get started{" "}
								<MoveUpRight className="w-4 h-4 ml-2" />
							</Link>
						</Button>
					</motion.div>

					<motion.div
						className="flex items-center justify-center md:justify-start gap-10 mt-10"
						variants={fadeIn("left", "spring", 0.2, 1)}
					>
						<div className="flex flex-col gap-1 items-center justify-center">
							<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
								15K+
							</h2>
							<p className="text-xs font-medium md:text-sm">
								Students
							</p>
						</div>
						<div className="flex flex-col gap-1 items-center justify-center">
							<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
								15K+
							</h2>
							<p className="text-xs font-medium md:text-sm">
								Students
							</p>
						</div>
					</motion.div>
				</div>
				<motion.div
					className="flex-1"
					variants={slideIn("right", "tween", 0.4, 1.1)}
				>
					<Image
						src={"/assets/images/test.jpg"}
						alt="Test"
						width={1000}
						height={1000}
						className="aspect-auto rounded-lg"
					/>
				</motion.div>
			</div>
			<div className="flex flex-col md:flex-row gap-4 mt-12">
				{coursesAdvantages.map(
					({ icon, title, description }, index) => {
						const IconComponent = icon;
						return (
							<>
								<motion.div
									variants={fadeIn(
										"right",
										"spring",
										index * 0.5,
										0.75
									)}
									className="flex-1 flex flex-col items-center justify-center text-center gap-6 md:gap-3"
									key={index}
								>
									<IconComponent className="w-10 lg:w-12 lg:h-14 h-10" />
									<h4 className="font-bold text-base">
										{title}
									</h4>
									<p className="text-xs">{description}</p>
								</motion.div>
								{index + 1 !== 3 && (
									<Separator className="md:hidden" />
								)}
							</>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default StartLearning;
