import type { BookFilters } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useBookFilters() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const search = searchParams.get("search") as BookFilters["search"];
	const genre = searchParams.get("genre") as BookFilters["genre"];
	const page = searchParams.get("page")
		? Number.parseInt(searchParams.get("page") as string)
		: undefined;

	const setFilters = useCallback(
		(filters: BookFilters) => {
			const params = new URLSearchParams(searchParams.toString());
			if (filters.search !== undefined) {
				params.set("search", filters.search);
			}

			if (filters.genre) {
				params.set("genre", filters.genre);
			}
			if (filters.page) {
				params.set("page", filters.page.toString());
			}

			replace(`${pathname}?${params.toString()}`);

			return params.toString();
		},
		[searchParams, pathname, replace],
	);

	return {
		search,
		genre,
		page,
		setFilters,
	};
}
