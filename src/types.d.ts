export interface Book {
	title: string;
	pages?: number;
	genre?: string;
	cover: string;
	synopsis?: string;
	year: number;
	ISBN?: string;
	author: Author;
	rating?: number;
}

export interface Author {
	name: string;
	otherBooks: string[];
}

export type BookFilters = {
	search?: string;
	genre?: "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror";
	page?: number;
};
