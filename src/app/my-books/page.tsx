"use client";

import { BookListFilters } from "@/components/book-filters";
import { BookList } from "@/components/books";
import { getBooks } from "@/services/book";
import { useBookFilters } from "../hooks/use-book-filters";

export default function MyBooksPage() {
	const { search, genre, page } = useBookFilters();
	const data = getBooks({
		search,
		genre,
		page,
	});

	return (
		<main className="p-4 min-h-screen max-w-[1200px] mx-auto">
			<BookListFilters />
			<div className="my-8">{data && <BookList library={data} />}</div>
		</main>
	);
}
