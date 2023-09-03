"use client";

import CreateListDialog from "./_components/dialogs/create-list-dialog";
import Spinner from "@/components/spinner";
import { useGetStarLists } from "./_lib";
import StarList from "./_components/star-list";

export default function Lists() {
	const { data: lists, isLoading } = useGetStarLists();

	if (isLoading || lists === undefined) {
		return <Spinner />;
	}

	return (
		<section>
			{lists && lists.length > 0 ? (
				<div className="h-screen px-10">
					<div className="flex justify-end">
						<CreateListDialog />
					</div>
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-24">
						{lists.map((list) => {
							return <StarList key={list.id} {...list} />;
						})}
					</div>
				</div>
			) : null}
			{lists && lists.length === 0 ? (
				<div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-8rem)] ">
					<p className="font-semibold text-xl text-center">
						No lists are found, get started by creating new lists.
					</p>
					<CreateListDialog />
				</div>
			) : null}
		</section>
	);
}
