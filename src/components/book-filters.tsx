"use client";

import { InputSearch } from "@/components/input-search";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useBookFilters } from "@/hooks/use-book-filters";
import type { BookFilters } from "@/types";
import book from "@/data";

export function BookListFilters() {
	const { genre, page, setFilters } = useBookFilters();

	const minPage = Math.min(...[...book.library].map((book) => book.book.pages));

	const maxPage = Math.max(...[...book.library].map((book) => book.book.pages));

	return (
		<div className="w-full flex gap-4 my-8">
			{/* <Input
				type="text"
				value={localSearch}
				onChange={(e) => setLocalSearch(e.target.value)}
				placeholder="Search Book"
			/> */}
			<InputSearch />
			<Select
				onValueChange={(value) => {
					console.log("value", value);
					setFilters({ genre: value as BookFilters["genre"] });
				}}
				value={genre || ""}
				defaultValue={genre || ""}
			>
				<SelectTrigger>
					<SelectValue placeholder="Select a genre" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="All">All</SelectItem>
					<SelectItem value="Ciencia ficción">Ciencia Ficcion</SelectItem>
					<SelectItem value="Fantasía">Fantasía</SelectItem>
					<SelectItem value="Terror">Terror</SelectItem>
					<SelectItem value="Zombies">Zombies</SelectItem>
				</SelectContent>
			</Select>
			<div className="w-full flex flex-col items-center justify-center gap-3">
				<Slider
					min={minPage}
					max={maxPage}
					step={10}
					onValueChange={(values) => {
						setFilters({ page: values[0] });
					}}
				/>
				<div className="w-full flex justify-between items-center">
					<Label>{minPage}</Label>
					<Label>{page}</Label>
					<Label>{maxPage}</Label>
				</div>
			</div>
		</div>
	);
}
