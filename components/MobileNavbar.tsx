"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/constants";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

export function MobileNavbar() {
	const pathname = usePathname();

	return (
		<nav className="lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src={"/assets/icons/menu.svg"}
						alt="Hamburger menu"
						height={30}
						width={30}
						className="cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent className="pt-8 flex items-center justify-center w-full md:w-600px">
					<SheetClose asChild>
						<div className="w-full">
							<ul className="flex space-y-4 uppercase flex-col text-center">
								{headerLinks.map(({ label, route }) => {
									const isActive =
										pathname === route ||
										pathname.startsWith(`${route}/`);
									return (
										<>
											<SheetClose asChild key={route}>
												<Link
													href={route}
													className={`${
														isActive &&
														"text-primary font-extrabold"
													} text-xs hover:underline hover:text-primary cursor-pointer`}
												>
													{label}
												</Link>
											</SheetClose>
											<Separator />
										</>
									);
								})}
							</ul>
							<div className="flex flex-col mt-6 gap-4 w-full">
								<Button variant={"ghost"} asChild>
									<Link href="/sign-in">Login</Link>
								</Button>
								<Button asChild>
									<Link href="/sign-up">
										Get started{" "}
										<MoveUpRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</div>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
