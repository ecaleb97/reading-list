import { Books } from "@/components/books";
import books from "./books.json";

export default function Home() {
	const { library } = books;
	return (
		<>
			<section className="max-w-[1200px] mx-auto p-4">
				<Books library={library} />
			</section>
		</>
	);
}
