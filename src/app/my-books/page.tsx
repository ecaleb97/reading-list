"use client";

import { BookCard } from "@/components/book-card";
import { BookListFilters } from "@/components/book-filters";
import { useBookFilters } from "@/hooks/use-book-filters";
import { getBooks } from "@/services/book";

export default function MyBooksPage() {
	const { search, genre, page } = useBookFilters();
	const data = getBooks({
		search,
		genre,
		page,
	});

	return (
		<main className="space-y-6">
			<BookListFilters />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
				{data.map((book) => {
					const { book: item } = book;
					return (
						<BookCard
							key={item.ISBN}
							title={item.title}
							cover={item.cover}
							author={item.author}
							rating={item.rating}
							year={item.year}
							actionLabel="Read"
							ISBN={item.ISBN}
						/>
					);
				})}
			</div>
		</main>
	);
}
