import books from "@/data";
import type { client } from "@/lib/rpc";
import { getBookByIsbn, getBooksByFilters } from "@/services/book";
import type { BookFilters } from "@/types";
import { useQuery } from "@tanstack/react-query";
import type { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.books.$get>;

export function useGetBooksByFilters({ search, genre }: BookFilters) {
	const query = useQuery<ResponseType>({
		queryKey: ["get-books-by-filters", { search, genre }],
		queryFn: () => getBooksByFilters({ search, genre }),
		enabled: !!search || !!genre,
	});

	return query;
}

export function useGetBookByIsbn(id: string) {
	const query = useQuery({
		enabled: !!id,
		queryKey: ["get-book", id],
		queryFn: () => getBookByIsbn(id),
	});
	return query;
}
