"use client";
import Link from "next/link";

import { Plus } from "@/lib/icons";
import Spinner from "@/components/spinner";
import Button from "@/ui/button";

import { useGetStarList, useGetStarListItemsByListId } from "../../_lib";
import StarredRepoCard from "@/app/(authenticated)/stars/_components/starred-repo-card";
import { useParams, useSearchParams } from "next/navigation";
import Pagination from "@/app/(authenticated)/stars/_components/pagination";

export default function StarsListPage() {
	const params = useParams();
	const searchParams = useSearchParams();
	const listId = Number(params.id);
	const page = Number(searchParams.get("page") || 1);

	const {
		data: listItems,
		error,
		isLoading,
	} = useGetStarListItemsByListId(listId);
	const { data: list } = useGetStarList(listId);

	if (isLoading && listItems === undefined) {
		return <Spinner />;
	}

	if (error || listItems === undefined || listItems.length < 1) {
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

	return (
		<section className="px-10">
			<div className="mt-5 mb-10">
				<h1 className="text-3xl font-bold capitalize">{list?.title}</h1>
				<p className="mt-3">{list?.description}</p>
			</div>
			<div className="flex flex-col gap-8 pb-10">
				{listItems.map((repo) => {
					return (
						<StarredRepoCard key={repo.created_at} id={repo.id!} {...repo} />
					);
				})}
				<Pagination page={page} result={listItems.length} />
			</div>
		</section>
	);
}
