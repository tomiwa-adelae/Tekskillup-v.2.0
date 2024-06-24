"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Ellipsis, Pencil, Telescope, Trash } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DeleteCourseAlertModal } from "./DeleteCourseAlertModal";

const courses = [
	{
		isPublished: false,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "2",
	},
	{
		isPublished: true,
		name: "MERN Stack Course",
		onlinePrice: 40000,
		weekendPrice: 40220,
		weekdaysPrice: 20220,
		id: "1",
	},
];

export function CoursesTable() {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			className="mt-8"
		>
			<motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>S/N</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Online price</TableHead>
							<TableHead>Weekend price</TableHead>
							<TableHead>Weekdays price</TableHead>
							<TableHead className="text-right">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{courses.map(
							(
								{
									name,
									onlinePrice,
									weekdaysPrice,
									weekendPrice,
									isPublished,
									id,
								},
								index
							) => (
								<TableRow key={index}>
									<TableCell className="font-medium">
										{index + 1}
									</TableCell>
									<TableCell>
										<Link
											className="hover:underline hover:text-green-400"
											href={`/my-courses/${id}`}
										>
											{name}
										</Link>
									</TableCell>
									<TableCell>{onlinePrice}</TableCell>
									<TableCell>{weekendPrice}</TableCell>
									<TableCell>{weekdaysPrice}</TableCell>
									<TableCell className="text-right">
										{isPublished ? (
											<Badge className="bg-green-400">
												Published
											</Badge>
										) : (
											<Badge className="bg-slate-300">
												Draft
											</Badge>
										)}
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Ellipsis className="cursor-pointer" />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<Link
													href={`/my-courses/${id}`}
												>
													<DropdownMenuItem className="">
														<Telescope className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Visit
														</span>
													</DropdownMenuItem>
												</Link>
												<DropdownMenuSeparator />
												<Link
													href={`/my-courses/${id}`}
												>
													<DropdownMenuItem className="">
														<Pencil className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Edit
														</span>
													</DropdownMenuItem>
												</Link>
												<DropdownMenuSeparator />

												<DeleteCourseAlertModal />
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			</motion.div>
		</motion.div>
	);
}
