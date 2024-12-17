"use client";

import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import {
	BarChart,
	BarChart2,
	BookMarked,
	BookOpen,
	Boxes,
	FileText,
	Import,
	Search,
	Star,
} from "lucide-react";

export function AppSidebar() {
	const { state } = useSidebar();

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className={`${state === "collapsed" ? "hidden" : ""}`}>
				<h2 className="mb-2 px-2 text-sm font-semibold">Bookshelves</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Boxes className="h-4 w-4 mr-2" />
									All
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BookOpen className="h-4 w-4 mr-2" />
									Read
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<div className={`px-4 mt-2 ${state === "collapsed" ? "hidden" : ""}`}>
					<Button variant="secondary" className="w-full">
						Add Shelf
					</Button>
				</div>
				<SidebarGroup>
					<SidebarGroupLabel>Your Reading Activity</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileText className="h-4 w-4 mr-2" />
									Review Drafts
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BookMarked className="h-4 w-4 mr-2" />
									Kindle Notes & Highlights
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Star className="h-4 w-4 mr-2" />
									Reading Challenge
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BarChart2 className="h-4 w-4 mr-2" />
									Year In Books
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BarChart className="h-4 w-4 mr-2" />
									Reading Stats
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Tools</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Search className="h-4 w-4 mr-2" />
									Find Duplicates
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Boxes className="h-4 w-4 mr-2" />
									Widgets
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Import className="h-4 w-4 mr-2" />
									Import & Export
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
