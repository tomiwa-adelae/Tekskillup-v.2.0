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

const users = [
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
	{
		name: "Praise johnson",
		email: "praise@gmail.com",
		phoneNumber: "08027836001",
		image: "/assets/images/user.jpg",
		id: "1",
	},
];

export function UsersTable() {
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
							({ name, email, phoneNumber, id }, index) => (
								<TableRow key={index}>
									<TableCell className="font-medium">
										{index + 1}
									</TableCell>
									<TableCell>
										<a
											target="_blank"
											className="hover:underline hover:text-green-400"
											href={`/users/${id}`}
										>
											{name}
										</a>
									</TableCell>
									<TableCell>
										<a
											target="_blank"
											className="hover:underline hover:text-green-400"
											href={`mailto:${email}`}
										>
											{email}
										</a>
									</TableCell>
									<TableCell>
										<a
											className="hover:underline hover:text-green-400"
											href={`tel:${phoneNumber}`}
										>
											{phoneNumber}
										</a>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Ellipsis className="cursor-pointer" />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<Link href={`/users/${id}`}>
													<DropdownMenuItem className="">
														<Telescope className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Visit
														</span>
													</DropdownMenuItem>
												</Link>
												<DropdownMenuSeparator />
												<a href={`mailto:${email}`}>
													<DropdownMenuItem className="">
														<Mail className="mr-2 h-4 w-4" />
														<span className="font-bold text-xs">
															Email
														</span>
													</DropdownMenuItem>
												</a>
												<DropdownMenuSeparator />

												<DeleteUserAlertModal />
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
