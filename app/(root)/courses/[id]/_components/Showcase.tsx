"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { applyForCourse } from "@/lib/actions/course.actions";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Showcase = ({
	name,
	user,
	course,
	firstName,
	lastName,
	email,
	phoneNumber,
	description,
}: {
	name: string;
	description: string;
	user: string;
	course: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}) => {
	const router = useRouter();
	const handleApply = async () => {
		await applyForCourse({
			firstName,
			lastName,
			email,
			description,
			phoneNumber,
			user,
			course,
			name,
		});
		router.push(`/courses/${course}/success`);
	};

	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="min-h-[70vh] container relative flex items-start justify-center flex-col py-12 bg-green-400 bg-no-repeat bg-scroll bg-center bg-cover text-white"
		>
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>
			<motion.h1
				variants={textVariant(1.1)}
				className="text-3xl leading-relaxed md:text-4xl lg:text-5xl md:leading-snug lg:leading-snug font-bold"
			>
				{name}
			</motion.h1>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs mt-2 w-full lg:w-3/4 lg:text-sm"
			>
				{description}
			</motion.p>
			<motion.div variants={slideIn("left", "tween", 0.2, 1)}>
				<Button
					onClick={handleApply}
					className="mt-10 bg-white text-green-400"
				>
					Click to apply
					<MoveUpRight className="w-4 h-4 ml-2" />
				</Button>
			</motion.div>
			<BackgroundBeams />
		</motion.div>
	);
};

export default Showcase;
