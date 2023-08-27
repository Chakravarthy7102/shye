import StarsListCollection from "@/database/schemas/star-list";
import StarListItemCollection from "@/database/schemas/star-list-item";

import useMutation from "@/hooks/query/useMutation";
import useQuery from "@/hooks/query/useQuery";

export function useCreateListMutation() {
	return useMutation(async function createList({
		title,
		description,
	}: {
		title: string;
		description?: string;
	}) {
		await StarsListCollection.create({
			title,
			description,
			reposCount: 0,
		});
	});
}

export function useGetStarLists() {
	return useQuery(async () => {
		const res = await StarsListCollection.findAll();
		return res;
	});
}

export function useGetStarListItems() {
	return useQuery(async () => {
		const res = await StarListItemCollection.findAll();
		return res;
	});
}
