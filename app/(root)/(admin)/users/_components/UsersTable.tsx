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
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Ellipsis, Mail, Pencil, Telescope } from "lucide-react";
import Link from "next/link";
import { DeleteUserAlertModal } from "./DeleteUserAlertModal";

export function UsersTable({ users }: { users: any }) {
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
							<TableHead>Email</TableHead>
							<TableHead>Phone number</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map(
							(
								user: {
									firstName: string;
									lastName: string;
									email: string;
									phoneNumber: string;
									_id: string;
								},
								index: string
							) => (
								<TableRow key={user._id}>
									<TableCell className="font-medium">
										{index + 1}.
									</TableCell>
									<TableCell>
										{user.firstName} {user.lastName}
									</TableCell>
									<TableCell>
										<a
											target="_blank"
											className="hover:underline hover:text-green-400"
											href={`mailto:${user.email}`}
										>
											{user.email}
										</a>
									</TableCell>
									<TableCell>
										<a
											className="hover:underline hover:text-green-400"
											href={`tel:${user.phoneNumber}`}
										>
											{user.phoneNumber}
										</a>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Ellipsis className="cursor-pointer" />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<a
													href={`mailto:${user.email}`}
												>
													<DropdownMenuItem className="">
														<Mail className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Email
														</span>
													</DropdownMenuItem>
												</a>
												<DropdownMenuSeparator />
												<DeleteUserAlertModal id={user._id} path={'/users'} />
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
