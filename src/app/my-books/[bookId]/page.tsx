import { BookCard } from "@/components/book-card";
import books from "../../../../books.json";

export default function BookPage({ params }: { params: { bookId: string } }) {
	const book = books.library.find((item) => item.book.ISBN === params.bookId);
	return (
		<>
			<main>
				<div className="max-w-[1200px] mx-auto p-4">
					{!book ? <p>Book not found</p> : <BookCard book={book.book} />}
				</div>
			</main>
		</>
	);
}
