"use client";

import { socials } from "@/constants";
import { footerVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="flex flex-col text-center sm:flex-row py-6 items-center sm:items-center justify-between container gap-6 border-t border-gray-300"
		>
			<div className="flex-1">
				<Image
					src={"/assets/images/tekskillup-logo.png"}
					alt="Tekskillup Logo"
					width={1000}
					height={1000}
					className="w-28"
				/>
			</div>
			<div className="flex flex-1 items-center justify-center gap-4">
				{socials.map((social, index) => {
					const IconComponent = social.icon;
					return (
						<a href={social.link} key={index} target="_blank">
							<IconComponent style={{ color: social.color }} />
						</a>
					);
				})}
			</div>
			<p className="text-xs flex-1 text-right">
				© 2024 TEKSKILLUP. ALL RIGHTS RESERVED.
			</p>
		</motion.footer>
	);
};

export default Footer;
