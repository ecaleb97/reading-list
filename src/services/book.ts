import book from "@/data";
import type { BookFilters } from "@/types";

export function getAllBooks() {
	return book.library;
}

export function getBooks(options: BookFilters) {
	let filteredBooks = book.library;

	if (options?.search) {
		filteredBooks = filteredBooks.filter((book) => {
			return book.book.title
				.toLowerCase()
				.includes(options.search?.toLocaleLowerCase() || "");
		});
	}

	if (options?.genre) {
		filteredBooks = filteredBooks.filter((book) => {
			return book.book.genre === options.genre;
		});
	}

	if (options.genre === "All") {
		filteredBooks = book.library;
	}

	if (options.page) {
		filteredBooks = filteredBooks.filter((book) => {
			return book.book.pages <= (options.page as number);
		});
	}

	return filteredBooks;
}

export function getBookByIsbn(id: string) {
	return book.library.find((book) => book.book.ISBN === id);
}
