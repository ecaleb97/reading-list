import { BookCard } from "@/components/book-card";
import { getBookByIsbn } from "@/services/book";
import { notFound } from "next/navigation";

export default function BookPage({ params }: { params: { bookId: string } }) {
	const book = getBookByIsbn(params.bookId);
	const data = book ? book.book : null;

	if (!data) {
		notFound();
	}

	return (
		<>
			<main>
				{!data && <p>Book not found</p>}
				{data && (
					<BookCard
						title={data.title}
						cover={data.cover}
						year={data.year}
						author={data.author}
						rating={data.rating}
						ISBN={data.ISBN}
					/>
				)}
			</main>
		</>
	);
}
