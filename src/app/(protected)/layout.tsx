import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default function AppLayout({
	children,
}: { children: React.ReactNode }) {
	const cookieStore = cookies();
	const defaultOpen = cookieStore.get("sidebar-state")?.value === "true";
	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />
			<SidebarInset>
				<Header />
				<div className="flex-1 flex flex-col lg:flex-row gap-6 p-4">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
