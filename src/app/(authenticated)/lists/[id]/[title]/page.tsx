"use client";
import Link from "next/link";

import { Plus } from "@/lib/icons";
import Spinner from "@/components/spinner";
import Button from "@/ui/button";

import { useGetStarListItems } from "../../_lib";

export default function StarsListPage() {
	const { data, error, isLoading } = useGetStarListItems();

	if (isLoading && data === undefined) {
		return <Spinner />;
	}

	if (error || data === undefined) {
		return (
			<section className="h-screen px-10 ">
				<div className="flex justify-between items-center mb-5">
					<h1 className="text-2xl font-bold mb-5">Demo</h1>
					<Button>Edit list</Button>
				</div>
				<div className="bg-zinc-950/20 backdrop-blur-md border border-blue-500/20 rounded-xl p-5 space-y-3 ">
					<div className="flex flex-col justify-center items-center gap-2 px-10 py-36 text-center">
						<Plus />
						<h2 className="text-2xl font-bold">
							Add repositories to this list
						</h2>
						<p className="text-sm text-zinc-400">
							Star repositories on GitHub to keep track of your favorite
							projects and inspirational code.{" "}
							<Link className="text-blue-400 " href={"/stars"}>
								Explore repositories.
							</Link>
						</p>
					</div>
				</div>
			</section>
		);
	}
}
