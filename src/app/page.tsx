import { BookCard } from "@/components/book-card";
import { Button } from "@/components/ui/button";
import { ViewToggle } from "@/components/view-toggle";
import { getBooksByFilters } from "@/services/book";

export default async function LandingPage() {
	const { data } = await getBooksByFilters({ search: "" });

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<h1 className="text-2xl sm:text-3xl font-serif">Bookshelves</h1>
				<ViewToggle />
			</div>
			<div>
				<h2 className="text-lg font-semibold mb-4">Read</h2>
				<Button
					variant="outline"
					className="w-full border rounded-lg p-4 text-muted-foreground mb-4 hover:bg-muted/50"
				>
					+ Add A New Book
				</Button>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
					{data.map((book) => {
						const { book: data } = book;
						return (
							<BookCard
								key={book.book.ISBN}
								title={data.title}
								cover={data.cover}
								author={data.author}
								// rating={data}
								year={data.year}
								ISBN={data.ISBN}
								actionLabel="Read"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
