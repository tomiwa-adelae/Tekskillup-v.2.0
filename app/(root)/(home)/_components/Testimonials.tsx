"use client";

import { TypingSubText } from "@/components/CustomTexts";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants";
import React, { useEffect, useState } from "react";

export function Testimonials() {
	return (
		<div className="py-16 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<TypingSubText
				title="Testimonials"
				textStyles="text-center text-2xl lg:text-3xl mb-8"
			/>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}
