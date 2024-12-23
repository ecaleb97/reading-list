import books from "@/data";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
	.get("/all", async (c) => {
		return c.json({ data: books.library });
	})
	.get(
		"/",
		zValidator(
			"query",
			z.object({
				search: z.string().optional(),
				genre: z.enum(["Fantasía", "Ciencia ficción", "Zombies", "Terror"]),
				page: z.coerce.number().optional(),
			}),
		),
		async (c) => {
			const options = c.req.valid("query");

			let filteredBooks = books.library;

			if (options?.search) {
				filteredBooks = filteredBooks.filter(
					(book) =>
						book.book.title
							.toLowerCase()
							.includes(options?.search?.toLowerCase() ?? "") ||
						book.book.author.name
							.toLowerCase()
							.includes(options?.search?.toLowerCase() || ""),
				);
			}

			if (options.genre) {
				filteredBooks = filteredBooks.filter(
					(book) => book.book.genre === options.genre,
				);
			}

			if (options.page) {
				filteredBooks = filteredBooks.filter((book) => {
					return book.book.pages <= Number(options.page);
				});
			}

			return c.json({ data: filteredBooks });
		},
	)
	.get(
		"/:isbn",
		zValidator(
			"param",
			z.object({
				isbn: z.string(),
			}),
		),
		async (c) => {
			const isbn = c.req.param("isbn");

			if (!isbn) {
				return c.json({ message: "ISBN is required" }, 400);
			}

			const data = books.library.find((book) => book.book.ISBN === isbn);

			if (!data) {
				return c.json({ message: "Book not found" }, 404);
			}

			return c.json({ data: data });
		},
	);

export default app;
