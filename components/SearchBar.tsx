"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderPlus } from "lucide-react";
import Link from "next/link";

const SearchBar = ({ type }: { type: string }) => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			className="mt-8 flex w-full items-center space-x-2"
		>
			<motion.div
				className="w-full"
				variants={fadeIn("right", "spring", 0.3, 0.5)}
			>
				<Input type="text" placeholder={`Search ${type}...`} />
			</motion.div>
			{type === "courses" && (
				<motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
					<Button asChild>
						<Link href="/create-course">
							<span className="hidden md:block">
								Create new Course
							</span>{" "}
							<FolderPlus className="ml-0 md:ml-2 w-4 h-4" />
						</Link>
					</Button>
				</motion.div>
			)}
		</motion.div>
	);
};

export default SearchBar;
