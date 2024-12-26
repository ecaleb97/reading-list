import { Button } from "@/components/ui/button";
import {
	Calendar,
	LayoutGrid,
	Table,
	TimerIcon as Timeline,
} from "lucide-react";

export function ViewToggle() {
	return (
		<div className="inline-flex flex-wrap border rounded-md overflow-hidden">
			<Button variant="ghost" className="rounded-none px-4 border-r h-9">
				<LayoutGrid className="h-4 w-4 sm:mr-2" />
				<span className="hidden sm:inline">Board</span>
			</Button>
			<Button variant="ghost" className="rounded-none px-4 border-r h-9">
				<Table className="h-4 w-4 sm:mr-2" />
				<span className="hidden sm:inline">Table</span>
			</Button>
			<Button variant="ghost" className="rounded-none px-4 border-r h-9">
				<Timeline className="h-4 w-4 sm:mr-2" />
				<span className="hidden sm:inline">Timeline</span>
			</Button>
			<Button variant="ghost" className="rounded-none px-4 h-9">
				<Calendar className="h-4 w-4 sm:mr-2" />
				<span className="hidden sm:inline">Calendar</span>
			</Button>
		</div>
	);
}
