"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, zoomIn } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import Image from "next/image";

const Description = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="py-12 container"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-1 border border-1 border-gray-300 rounded-lg">
				<div className="py-8 px-6">
					<TypingSubText
						title="Course Description"
						textStyles="text-left text-2xl lg:text-3xl"
					/>
					<motion.p
						variants={textVariant(1.3)}
						className="text-xs lg:text-sm mt-4 text-gray-600"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Illo qui temporibus ipsam suscipit sint asperiores
						tenetur incidunt id officiis quam, doloribus adipisci
						vero inventore atque et tempore ipsa reprehenderit
						obcaecati? Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Illo qui temporibus ipsam suscipit
						sint asperiores tenetur incidunt id officiis quam,
						doloribus adipisci vero inventore atque et tempore ipsa
						reprehenderit obcaecati? Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Illo qui temporibus ipsam
						suscipit sint asperiores tenetur incidunt id officiis
						quam, doloribus adipisci vero inventore atque et tempore
						ipsa reprehenderit obcaecati?
					</motion.p>
				</div>
				<motion.div variants={zoomIn(0.2, 1)} className="py-2 px-2">
					<Image
						src="/assets/images/test.jpg"
						alt="Test"
						width={1000}
						height={1000}
						className="aspect-video rounded-lg"
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Description;
