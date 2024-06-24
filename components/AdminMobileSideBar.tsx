"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { adminSideBarLinks } from "@/constants";
import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

export function AdminMobileSideBar() {
	const pathname = usePathname();

	return (
		<nav className="lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Menu size={30} className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent
					side={"left"}
					className="pt-8 flex items-center justify-center w-full md:w-600px"
				>
					<SheetClose asChild>
						<div className="w-full">
							<ul className="flex space-y-4 uppercase flex-col text-center">
								{adminSideBarLinks.map(
									({ label, route }, index) => {
										const isActive =
											pathname === route ||
											pathname.startsWith(`${route}/`);
										return (
											<>
												<SheetClose asChild key={index}>
													<Link
														href={route}
														className={`${
															isActive
																? "bg-green-400 text-white font-bold"
																: "text-gray-600"
														} transition ease-out p-4 w-auto text-xs uppercase h-auto rounded-lg hover:bg-green-400`}
													>
														{label}
													</Link>
												</SheetClose>
												<Separator />
											</>
										);
									}
								)}
							</ul>
						</div>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
