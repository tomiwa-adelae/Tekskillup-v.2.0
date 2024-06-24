"use client";

import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingTeams = ({
	teams,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	teams: {
		name: string;
		image: string;
		title: string;
		bgColor: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			ref={containerRef}
			className={cn("scroller relative z-20", className)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{teams.map((team, idx) => (
					<div key={idx}>
						<div
							className="relative w-64 h-64"
							style={{ backgroundColor: team.bgColor }}
						>
							<Image
								src={team.image}
								alt={team.name}
								width={1000}
								height={1000}
								className="absolute bottom-0 w-full h-80 object-fill"
							/>
						</div>
						<div className="space-y-2 mt-3">
							<h4 className="text-sm lg:text-base font-bold">
								{team.name}
							</h4>
							<p className="text-xs">{team.title}</p>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};
