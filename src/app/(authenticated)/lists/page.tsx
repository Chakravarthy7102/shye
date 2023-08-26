"use client";

import { useEffect, useState } from "react";

import StarsListCollection, { StarsList } from "@/database/schemas/star-list";
import CreateListDialog from "./components/dialogs/CreateListDialog";

export default function Lists() {
	const [lists, setLists] = useState<Omit<StarsList, "repos">[]>([]);

	async function getStarLists() {
		try {
			const res = await StarsListCollection.findAll();
			setLists(res);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getStarLists();
	}, []);

	return (
		<section>
			{lists.length > 0 ? (
				<div className="h-screen">
					<div className="flex justify-end">
						<CreateListDialog />
					</div>
					<pre>{JSON.stringify(lists, null, 2)}</pre>
				</div>
			) : null}
			{lists.length === 0 ? (
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
