"use client";

import CreateListDialog from "./_components/dialogs/CreateListDialog";
import Spinner from "@/components/spinner";
import { useGetStarLists } from "./_lib";

export default function Lists() {
	const { data: lists, isLoading } = useGetStarLists();

	if (isLoading || lists === undefined) {
		return <Spinner />;
	}

	return (
		<section>
			{lists && lists.length > 0 ? (
				<div className="h-screen">
					<div className="flex justify-end">
						<CreateListDialog />
					</div>
					<pre>{JSON.stringify(lists, null, 2)}</pre>
				</div>
			) : null}
			{lists && lists.length === 0 ? (
				<div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-8rem)] ">
					<p className="font-semibold text-xl">
						No lists are found, get started by creating new lists.
					</p>
					<CreateListDialog />
				</div>
			) : null}
		</section>
	);
}
