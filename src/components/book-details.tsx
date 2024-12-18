import type { Author, Book } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

export function BookDetails({ book }: { book: Book }) {
	return (
		<div className="flex flex-col sm:flex-row gap-6">
			<Image
				src={book.cover}
				alt={`Cover of ${book.title}`}
				width={200}
				height={300}
				className="w-full sm:w-48 h-auto object-cover rounded-lg shadow-md"
			/>
			<div>
				<h1 className="text-3xl font-bold mb-2">{book.title}</h1>
				<p className="text-xl text-gray-600 mb-4">by {book.author.name}</p>
				<div className="flex items-center mb-2">
					{Array.from({ length: 5 }).map((_, i) => (
						<Star
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className={`h-5 w-5 ${i < Math.floor(book.rating ?? 0) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
						/>
					))}
					<span className="ml-2 text-gray-600">{book.rating?.toFixed(1)}</span>
				</div>
				<p className="text-gray-600 mb-2">{book.genre}</p>
				<p className="text-gray-600">{book.pages} pages</p>
			</div>
		</div>
	);
}

export function AuthorInfo({ author }: { author: Author }) {
	return (
		<div className="mb-8">
			<h2 className="text-2xl font-bold mb-4">About the Author</h2>
			<div>
				<h3 className="text-xl font-semibold mb-2">{author.name}</h3>
				{/* {author.otherBooks.map((book) => (
					<p key={book} className="text-gray-700">
						{book}
					</p>
				))} */}
			</div>
		</div>
	);
}

export function RelatedBooks({ books }: { books: Author["otherBooks"] }) {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Related Books</h2>
			<div>
				{books.map((book) => (
					<Fragment key={book}>
						<h3 className="text-sm leading-tight text-gray-700">{book}</h3>
					</Fragment>
				))}
			</div>
		</div>
	);
}
