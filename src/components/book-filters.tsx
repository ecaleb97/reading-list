"use client";

import { useBookFilters } from "@/app/hooks/use-book-filters";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import type { BookFilters } from "@/types";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import book from "../../books.json";
import { Label } from "./ui/label";

export function BookListFilters() {
	const { search, genre, page, setFilters } = useBookFilters();
	const [localSearch, setLocalSearch] = useState<BookFilters["search"]>(
		search || "",
	);
	const debouncedSearch = useDebounce(localSearch, 500);

	useEffect(() => {
		setFilters({ search: debouncedSearch });
	}, [debouncedSearch, setFilters]);

	const minPage = Math.min(...[...book.library].map((book) => book.book.pages));

	const maxPage = Math.max(...[...book.library].map((book) => book.book.pages));

	return (
		<div className="w-full flex gap-4">
			<Input
				type="text"
				value={localSearch}
				onChange={(e) => setLocalSearch(e.target.value)}
				placeholder="Search Book"
			/>
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
