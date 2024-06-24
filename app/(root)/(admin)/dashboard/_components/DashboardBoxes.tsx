"use client";

import React from "react";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";

import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import UsersLineChart from "./UsersLineChart";
import CoursesLineChart from "./CoursesLineChart";

const DashboardBoxes = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="my-8"
		>
			<BentoGrid>
				<motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
					<Link
						href="/my-courses"
						className={
							"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 py-12 dark:bg-black dark:border-white/[0.2] justify-between flex flex-col space-y-4 hover:border-0 relative"
						}
					>
						<div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center justify-center gap-3">
							<Image
								src={"/assets/icons/courses-icon.png"}
								alt="courses"
								height={1000}
								width={1000}
								className="w-20 h-20 object-cover"
							/>
							<h4 className="font-bold text-base uppercase">
								Courses
							</h4>
							<h4 className="font-bold text-xl uppercase text-green-400">
								5
							</h4>
						</div>
						<UsersLineChart />
					</Link>
				</motion.div>
				<motion.div
					variants={slideIn("up", "tween", 0.5, 0.75)}
					className={
						"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 py-12 dark:bg-black dark:border-white/[0.2] justify-between flex flex-col space-y-4 hover:border-0"
					}
				>
					<Link
						href="/users"
						className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center justify-center gap-3"
					>
						<Image
							src={"/assets/icons/users-icon.png"}
							alt="users"
							height={1000}
							width={1000}
							className="w-20 h-20 object-cover"
						/>
						<h4 className="font-bold text-base uppercase">Users</h4>
						<h4 className="font-bold text-xl uppercase text-green-400">
							5
						</h4>
					</Link>
					<CoursesLineChart />
				</motion.div>
			</BentoGrid>
		</motion.div>
	);
};

export default DashboardBoxes;
