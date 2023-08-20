"use client";

import { useRouter } from "next/navigation";

import Button from "@/ui/button";

export default function Pagination({
	page,
	result,
}: {
	page: number;
	result: number;
}) {
	const router = useRouter();

	if (page === 1 && result === 0) {
		return null;
	}

	return (
		<div className="flex gap-2 justify-center pt-0 p-10">
			<Button
				disabled={page === 1}
				onClick={() => router.push(`/stars?page=${page - 1}`)}
			>
				Previous
			</Button>
			<Button
				disabled={result < 30}
				onClick={() => router.push(`/stars?page=${page + 1}`)}
			>
				Next
			</Button>
		</div>
	);
}
