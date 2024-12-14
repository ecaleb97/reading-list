import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Library } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function BookList({ library }: { library: Library[] }) {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{library.map((book) => {
				const { book: data } = book;
				return (
					<Link key={data.ISBN} href={`/my-books/${data.ISBN}`}>
						<Image
							src={data.cover}
							alt={`${data.title} cover`}
							width={250}
							height={250}
							className="rounded-lg object-contain size-[250px] md:size-[300px]"
						/>
					</Link>
				);
			})}
		</div>
	);
}
