"use client";

import Link from "next/link";
import { adminSideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
	const pathname = usePathname();
	return (
		<div className="hidden fixed left-0 top-20 h-screen lg:flex container w-64 pt-4 border-r border-gray-300 flex-col gap-3">
			{adminSideBarLinks.map(({ route, label }, index) => {
				const isActive =
					pathname === route || pathname.startsWith(`${route}/`);
				return (
					<Link
						key={index}
						href={route}
						className={`${
							isActive
								? "bg-green-400 text-white font-bold"
								: "text-gray-600"
						} transition ease-out p-4 w-auto text-xs uppercase h-auto rounded-lg hover:bg-green-400 hover:text-white`}
					>
						{label}
					</Link>
				);
			})}
		</div>
	);
};

export default LeftSideBar;
