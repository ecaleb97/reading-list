"use client";

import { Input } from "@/components/ui/input";
import { useBookParams } from "@/hooks/use-book-filters";
import type { BookFilters } from "@/types";
import { useDebounce } from "@uidotdev/usehooks";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function InputSearch() {
	const { search, setFilters } = useBookParams();
	const [localSearch, setLocalSearch] = useState<BookFilters["search"]>(
		search || "",
	);

	const debouncedSearch = useDebounce(localSearch, 500);

	useEffect(() => {
		setFilters({ search: debouncedSearch });
	}, [debouncedSearch, setFilters]);

	return (
		<div className="relative w-full">
			<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
			<Input
				type="text"
				value={localSearch}
				onChange={(e) => setLocalSearch(e.target.value)}
				placeholder="Search Books"
				className="bg-muted/50 pl-8 pr-4 py-2 text-sm rounded-md focus:outline-none"
			/>
		</div>
	);
}
