import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, MoveRight, UserRound } from "lucide-react";
import { formatToNaira } from "@/lib/utils";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

type CourseProps = {
	picture: string;
	name: string;
	description: string;
	weekendPrice: string;
	weekdaysPrice: string;
	id: string;
	category: string;
	onlinePrice: number | string;
	students: number;
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
	students,
}: CourseProps) => {
	return (
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
			<p className="text-xs line-clamp-4">{description}</p>
			<h3 className="text-base font-semibold">
				{formatToNaira(onlinePrice)}
			</h3>
			<Separator />
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-start">
					<UserRound className="w-4 h-4 mr-2 text-gray-400" />
					<p className="text-gray-400 text-sm">
						{students} {students > 1 ? "students" : "student"}
					</p>
				</div>
				<Button asChild size={"icon"}>
					<Link href={`/courses/${id}`}>
						<MoveRight />
					</Link>
				</Button>
			</div>
		</Card>
	);
};

export default CourseCard;
