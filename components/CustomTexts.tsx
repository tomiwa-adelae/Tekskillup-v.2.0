"use client";

import { textContainer, textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";

export const TypingSubText = ({
	title,
	textStyles,
}: {
	title: string;
	textStyles: string;
}) => (
	<motion.p variants={textContainer} className={`font-bold ${textStyles}`}>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({
	title,
	textStyles,
}: {
	title: string;
	textStyles: string;
}) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`mt-[8px] font-bold md:text-[64px] text-[40px] ${textStyles}`}
	>
		{title}
	</motion.h2>
);
