import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	image,
	number,
}: {
	className?: string;
	title: string;
	image: string;
	number: number | string;
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-lg bg-green-200 border border-orange-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] justify-between flex flex-col space-y-4",
				className
			)}
		>
			<div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center justify-center gap-3">
				<Image
					src={image}
					alt={title}
					height={1000}
					width={1000}
					className="w-20 h-20 object-cover"
				/>
				<h4 className="font-bold text-base uppercase">{title}</h4>
				<h4 className="font-bold text-xl uppercase text-green-400">
					{number}
				</h4>
			</div>
		</div>
	);
};
