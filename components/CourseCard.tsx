import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CourseProps = {
	image: string;
	title: string;
	id: string;
	price: number;
};

const CourseCard = ({ image, title, id, price }: CourseProps) => {
	return (
		<div className="flex flex-col justify-center gap-3 border border-gray-300 p-2 rounded-lg">
			<Image
				src={image}
				width={1000}
				height={1000}
				alt={title}
				className="aspect-video rounded-lg"
			/>
			<h4 className="font-bold text-base">{title}</h4>
			<p className="text-sm">{price}</p>
			<div className="w-auto text-right">
				<Button size={"sm"} asChild>
					<Link href={`/courses/${id}`}>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default CourseCard;
