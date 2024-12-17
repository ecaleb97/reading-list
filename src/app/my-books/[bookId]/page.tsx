import { BookCard } from "@/components/book-card";
import books from "@/data";

export default function BookPage({ params }: { params: { bookId: string } }) {
	const book = books.library.find((item) => item.book.ISBN === params.bookId);
	const data = book ? book.book : null;

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
