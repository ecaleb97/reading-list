import type { BookFilters } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQueryState, useQueryStates } from "nuqs";
import { useCallback } from "react";

export function useBookParams() {
	const [search, setSearch] = useQueryState<BookFilters["search"]>("search", {
		defaultValue: "",
		history: "push",
		parse: (value) => value as BookFilters["search"],
	});

	const [genre, setGenre] = useQueryState<BookFilters["genre"]>("genre", {
		history: "push",
		defaultValue: "Ciencia ficción",
		parse: (value) => value as BookFilters["genre"],
	});

	const setFilters = useCallback(
		(filters: BookFilters) => {
			if (filters.search !== undefined) {
				setSearch(filters.search);
			}
			if (filters.genre) {
				setGenre(filters.genre);
			}
		},
		[setGenre, setSearch],
	);

	return {
		search,
		genre,
		setFilters,
	};
}
