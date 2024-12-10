import { BookList } from "@/components/books";
import books from "../../books.json";

export default function LandingPage() {
	const { library } = books;
	return (
		<>
			<section className="max-w-[1200px] mx-auto p-4">
				<BookList library={library} />
			</section>
		</>
	);
}
