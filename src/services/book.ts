import { client } from "@/lib/rpc";
import type { BookFilters } from "@/types";

export async function getBooksByFilters({ search, genre }: BookFilters) {
	const response = await client.api.books.$get({
		query: {
			search: search as string,
			genre: genre as string, 
		},
	});

	if (!response.ok) {
		throw new Error(`Error fetching books: ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}

export async function getBookByIsbn(id: string) {
	const response = await client.api.books[":isbn"].$get({
		param: {
			isbn: id,
		},
	});

	if (!response.ok) {
		throw new Error(`Error fetching book: ${response.statusText}`);
	}

	return await response.json();
}
