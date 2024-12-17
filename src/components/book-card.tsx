import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Book } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps extends Book {
	progress?: number;
	actionLabel?: string;
}

export function BookCard({
	title,
	cover,
	author,
	rating,
	year,
	progress,
	actionLabel,
	ISBN,
}: BookCardProps) {
	return (
		<div className="border rounded-lg p-4">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<Link href={`/my-books/${ISBN}`}>
						<Image
							alt={title}
							src={cover}
							className="h-48 w-[240px] sm:w-24 object-cover rounded border mx-auto sm:mx-0"
							width={240}
							height={192}
						/>
					</Link>
					<div className="flex-1 space-y-2">
						<h3 className="font-medium leading-tight text-center sm:text-left">
							{title}
						</h3>
						<p className="text-sm text-muted-foreground text-center sm:text-left">
							by {author?.name ?? "Unknown"}
						</p>
						<div className="flex justify-center sm:justify-start text-amber-400">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={i}
									className={`w-4 h-4 ${i < (rating ?? 0) ? "fill-current" : "fill-muted stroke-muted-foreground"}`}
								/>
							))}
						</div>
						{year && (
							<p className="text-xs text-muted-foreground text-center sm:text-left">
								{year}
							</p>
						)}
						{progress !== undefined && (
							<Progress value={progress} className="h-2" />
						)}
					</div>
				</div>

				{actionLabel && (
					<Button variant="outline" size="sm" className="w-full">
						{actionLabel}
					</Button>
				)}
			</div>
		</div>
	);
}
