"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FAQs = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container py-12 bg-green-100"
		>
			<TypingSubText
				title="Frequently Asked Questions"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				Still have any questions? Contact our Team via <br />
				support@tekskillup.com
			</motion.p>
			<div className="mt-8 flex flex-col gap-4">
				{faqs.map((faq, index) => (
					<motion.div
						variants={fadeIn("up", "spring", index * 0.5, 0.75)}
						key={index}
					>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem
								className="bg-white px-4 py-2 rounded-lg"
								value="item-1"
							>
								<AccordionTrigger className="font-bold">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default FAQs;
