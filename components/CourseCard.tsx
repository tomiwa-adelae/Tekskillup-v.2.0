import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatToNaira } from "@/lib/utils";
import { Card } from "./ui/card";

type CourseProps = {
	picture: string;
	name: string;
	description: string;
	weekendPrice: string;
	weekdaysPrice: string;
	id: string;
	category: string;
	onlinePrice: number | string;
};

const CourseCard = ({
	picture,
	name,
	id,
	onlinePrice,
	description,
	weekendPrice,
	weekdaysPrice,
	category,
}: CourseProps) => {
	return (
		<Link href={`/courses/${id}`}>
			<Card className="text-center py-6 px-4 space-y-4">
				<p className="text-sm text-green-400">{category}</p>
				<h2 className="text-xl font-bold">{name}</h2>
				<Image
					src={picture}
					alt={name}
					width={1000}
					height={1000}
					className="aspect-video object-cover rounded-lg"
				/>
				<p className="text-xs text-left line-clamp-4">{description}</p>
				<h3 className="text-base font-semibold">
					{formatToNaira(onlinePrice)}
				</h3>
			</Card>
		</Link>
	);
};

export default CourseCard;
