"use client";

import { BookCard } from "@/components/book-card";
import { BookListFilters } from "@/components/book-filters";
import { useGetBooksByFilters } from "@/features/books/api/use-get-books";
import { useBookParams } from "@/hooks/use-book-filters";

export default function MyBooksPage() {
	let { search, genre } = useBookParams();
	if (search === null) {
		search = "";
	}
	if (genre === null) {
		genre = "Ciencia ficción";
	}

	const { data: books } = useGetBooksByFilters({
		search,
		genre,
	});
	console.log("books", books?.data);

	return (
		<main className="space-y-6">
			<>
				<BookListFilters />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
					{books?.data?.map((book) => {
						const { book: item } = book;
						return (
							<BookCard
								key={item.ISBN}
								title={item.title}
								cover={item.cover}
								author={item.author}
								year={item.year}
								actionLabel="Read"
								ISBN={item.ISBN}
							/>
						);
					})}
				</div>
			</>
		</main>
	);
}
