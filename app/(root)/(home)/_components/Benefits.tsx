"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";
import { benefits } from "@/constants";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Benefits = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="flex flex-col gap-8 md:flex-row items-start justify-between md:text-left container py-12"
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-1"
			>
				<Image
					src={"/assets/images/test.jpg"}
					alt={"Test image"}
					height={1000}
					width={1000}
					className="aspect-auto rounded-lg"
				/>
			</motion.div>
			<div className="flex-1">
				<TypingSubText
					title="Benefit from our online learning expert"
					textStyles="text-2xl lg:text-3xl"
				/>

				<div className="flex flex-col gap-4 mt-8">
					{benefits?.map((benefit, index) => {
						const IconComponent = benefit.icon;
						return (
							<div
								key={index}
								className="flex items-start justify-start gap-4"
							>
								<div className="p-2 rounded-full bg-green-100">
									<IconComponent />
								</div>
								<div>
									<TypingSubText
										title={benefit.title}
										textStyles="text-base"
									/>
									<TextGenerateEffect
										words={benefit.description}
										className="text-xs font-normal md:text-sm mt-2"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

export default Benefits;
