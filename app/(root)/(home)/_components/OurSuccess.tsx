"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";

const OurSuccess = () => {
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
				title="Our Success"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 lg:w-3/4 mx-auto"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				qui temporibus ipsam suscipit sint asperiores tenetur incidunt
				id officiis quam, doloribus adipisci vero inventore atque et
				tempore ipsa reprehenderit obcaecati?
			</motion.p>
		</motion.div>
	);
};

export default OurSuccess;
