import type { Book, Library } from "@/types";
import books from "../../../../books.json";

export default function BookPage({
	params,
}: { params: { bookId: string; book: Book } }) {
	const book = books.library.find((item) => item.book.ISBN === params.bookId);
	return (
		<>
			<div className="">
				{!book ? <p>Book not found</p> : <SingleBook book={book.book} />}
			</div>
		</>
	);
}

function SingleBook({ book }: { book: Book }) {
	return (
		<div>
			<h1>{book.title}</h1>
			<p>{book.author.name}</p>
			<div>
				{book.author.otherBooks.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<p key={index}>{item}</p>
				))}
			</div>
			<p>{book.ISBN}</p>
			<p>{book.cover}</p>
			<p>{book.genre}</p>
			<p>{book.pages}</p>
			<p>{book.year}</p>
		</div>
	);
}
