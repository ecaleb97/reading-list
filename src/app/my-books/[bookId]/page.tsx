import {
	AuthorInfo,
	BookDetails,
	RelatedBooks,
} from "@/components/book-details";
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
			<main className="container mx-auto px-4 py-8">
				{!data && <p>Book not found</p>}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="md:col-span-2">
						{data && <BookDetails book={data} />}
						<div className="mt-8">
							<h2 className="text-2xl font-bold mb-4">Synopsis</h2>
							<p className="text-gray-700">{data.synopsis}</p>
						</div>
					</div>
					<div>
						<AuthorInfo author={data.author} />
						<RelatedBooks books={data.author.otherBooks} />
					</div>
				</div>
			</main>
		</>
	);
}
