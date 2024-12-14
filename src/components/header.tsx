"use client";

import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AudioWaveform, Book } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		href: "/",
		label: "Books",
		icon: Book,
	},
	{
		href: "/my-books",
		label: "My books",
		icon: AudioWaveform,
	},
];

export function Header() {
	const pathname = usePathname();
	return (
		<header
			className={`${montserrat.className} antialiased max-w-[1200px] mx-auto p-4 flex justify-between items-center`}
		>
			<h1 className="text-3xl font-bold">
				<Link href="/">Books</Link>
			</h1>
			<nav className="text-sm font-normal flex gap-3">
				{links.map((link) => (
					<Link
						href={link.href}
						key={link.href}
						className={cn(
							"text-black flex gap-1 items-center hover:scale-105",
							{
								"bg-[#DAAA63]/70 px-4 py-1 rounded-full":
									pathname === link.href,
							},
						)}
					>
						<link.icon className="size-4" />
						{link.label}
					</Link>
				))}
			</nav>
			<nav>
				<Link href="/favorites">Favorites</Link>
			</nav>
		</header>
	);
}
