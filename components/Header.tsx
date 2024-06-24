"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNavbar } from "./MobileNavbar";
import { AdminMobileSideBar } from "./AdminMobileSideBar";
import { MoveUpRight } from "lucide-react";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
	const pathname = usePathname();

	return (
		<motion.header
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="h-20 sticky top-0 left-0 bg-white z-20 flex items-center justify-center"
		>
			<div className="container flex items-center justify-between">
				<div className="flex items-center justify-start gap-3">
					{/* <AdminMobileSideBar /> */}
					<Link href="/">
						<Image
							src={"/assets/images/tekskillup-logo.png"}
							alt="Tekskillup Logo"
							height={1000}
							width={1000}
							className="w-28 md:w-36"
						/>
					</Link>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex text-xs items-center justify-center gap-4 lg:gap-6 uppercase">
						{headerLinks.map((link) => {
							const isActive = pathname === link.route;
							return (
								<>
									<li
										className={`${
											isActive &&
											"text-primary font-extrabold"
										} hover:underline hover:text-primary cursor-pointer`}
										key={link.route}
									>
										<Link href={link.route}>
											{link.label}
										</Link>
									</li>
								</>
							);
						})}
					</ul>
				</nav>
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
				</SignedIn>
				<SignedOut>
					<div className="hidden md:flex items-center justify-center gap-4">
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
				</SignedOut>
				<MobileNavbar />
			</div>
		</motion.header>
	);
};

export default Header;
