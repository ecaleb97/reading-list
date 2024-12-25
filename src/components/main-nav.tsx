"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		href: "/home",
		label: "Home",
	},
	{
		href: "/books",
		label: "My Books",
	},
	{
		href: "#",
		label: "Browse",
	},
	{
		href: "#",
		label: "Community",
	},
];

export function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 text-gray-500">
			{navLinks.map((link) => (
				<Link
					key={link.label}
					href={link.href}
					className={cn(
						"text-sm font-medium hover:text-gray-900",
						pathname === link.href && "text-gray-900",
					)}
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
