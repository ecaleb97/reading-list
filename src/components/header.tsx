import library from "@/data";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
	AudioWaveform,
	Bell,
	Book,
	Clock,
	Search,
	UserCircle,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InputSearch } from "./input-search";
import { MainNav } from "./main-nav";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
	console.log("Library", library);
	return (
		<header className="flex pt-6 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
			<div className="w-full flex items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<div className="mr-2">
					<Link href="/" className="font-serif text-xl font-bold">
						Books
					</Link>
				</div>
				<div className="hidden lg:block">
					<MainNav />
				</div>
				<div className="flex-1 max-w-sm ml-auto mr-4">
					<InputSearch />
				</div>
				<nav className="flex items-center gap-4">
					<Bell className="h-5 w-5 text-muted-foreground" />
					<Clock className="h-5 w-5 text-muted-foreground hidden sm:block" />
					<Users className="h-5 w-5 text-muted-foreground hidden sm:block" />
					<UserCircle className="h-5 w-5 text-muted-foreground" />
				</nav>
			</div>
		</header>
	);
}
