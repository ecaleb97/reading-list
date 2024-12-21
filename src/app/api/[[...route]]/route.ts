import books from "@/features/books/server/route";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

const routes = app.route("/books", books);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
