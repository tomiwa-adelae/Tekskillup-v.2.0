"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";

const Showcase = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="min-h-[70vh] container flex items-center justify-center text-center flex-col py-12 bg-no-repeat bg-scroll bg-center bg-cover text-white"
			style={{ backgroundImage: `url(/assets/images/test.jpg)` }}
		>
			<motion.h1
				variants={textVariant(1.1)}
				className="text-3xl leading-relaxed md:text-4xl lg:text-5xl md:leading-snug lg:leading-snug font-bold"
			>
				Contact us
			</motion.h1>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs mt-2 lg:text-sm"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci facilis modi soluta velit illum dolorem eos
				repudiandae? Tempore ipsa, nihil debitis quis impedit alias
				labore, doloremque, illo porro velit pariatur dolores
				necessitatibus! Eveniet accusantium tenetur non et nesciunt,
				laudantium illo consequuntur porro at? Magni et nostrum
				doloremque dolores. Laboriosam, excepturi.
			</motion.p>
		</motion.div>
	);
};

export default Showcase;
