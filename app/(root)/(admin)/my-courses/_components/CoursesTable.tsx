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
import { formatToNaira } from "@/lib/utils";

export function CoursesTable({ courses }: { courses: any }) {
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
							<TableHead>Category</TableHead>
							<TableHead>Online price</TableHead>
							<TableHead>Weekend price</TableHead>
							<TableHead>Weekdays price</TableHead>
							<TableHead className="text-right">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{courses.map(
							(
								course: {
									name: string;
									category?: { name?: string };
									onlinePrice: any;
									weekendPrice: any;
									weekdaysPrice: any;
									isPublished: boolean;
									_id: string;
								},
								index: string
							) => (
								<TableRow key={index}>
									<TableCell className="font-medium">
										{index + 1}.
									</TableCell>
									<TableCell>
										<Link
											className="hover:underline line-clamp-1 hover:text-green-400"
											href={`/my-courses/${course._id}`}
										>
											{course.name}
										</Link>
									</TableCell>
									<TableCell>
										<p className="line-clamp-1">
											{course?.category?.name || (
												<p className="italic ">
													No category
												</p>
											)}
										</p>
									</TableCell>
									<TableCell>
										{course.onlinePrice !== undefined &&
											formatToNaira(course.onlinePrice)}
										{course.onlinePrice === undefined && (
											<p className="italic">No price</p>
										)}
									</TableCell>
									<TableCell>
										{course.weekendPrice !== undefined &&
											formatToNaira(course.weekendPrice)}
										{course.weekendPrice === undefined && (
											<p className="italic">No price</p>
										)}
									</TableCell>
									<TableCell>
										{course.weekdaysPrice !== undefined &&
											formatToNaira(course.weekdaysPrice)}
										{course.weekdaysPrice === undefined && (
											<p className="italic">No price</p>
										)}
									</TableCell>
									<TableCell className="text-right">
										{course.isPublished ? (
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
												<DropdownMenuSeparator />
												<Link
													href={`/my-courses/${course._id}`}
												>
													<DropdownMenuItem className="">
														<Pencil className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Edit
														</span>
													</DropdownMenuItem>
												</Link>
												<DropdownMenuSeparator />

												<DeleteCourseAlertModal
													id={course._id}
													path={"/my-courses"}
												/>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
				{courses?.length === 0 && (
					<p className="text-sm italic text-center mt-8">
						No courses
					</p>
				)}
			</motion.div>
		</motion.div>
	);
}
