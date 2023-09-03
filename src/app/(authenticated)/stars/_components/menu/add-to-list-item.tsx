import { useState, useMemo } from "react";
import toast from "react-hot-toast";

import { useGetStarListItems } from "@/app/(authenticated)/lists/_lib";
import { StarsList } from "@/database/schemas/star-list";
import StarListItemCollection from "@/database/schemas/star-list-item";
import { DropdownMenuItem } from "@/ui/dropdown-menu";
import Checkbox from "@/ui/form/checkbox";

import { AddToListDropdownMenuProps } from "./add-to-list-dropdown-menu";

type ListItemProps = {
	list: StarsList;
} & AddToListDropdownMenuProps;

export default function AddToListDropdownItem({ list, repo }: ListItemProps) {
	const { data } = useGetStarListItems();
	const [checked, setChecked] = useState<boolean | undefined>(undefined);
	const { isPartOfThisList } = useMemo(() => {
		let isPartOfThisList = false;

		if (data && list.id) {
			const currentRepoInstance = data.filter(
				(instance) => instance.githubRepoId === repo.id
			);
			isPartOfThisList = currentRepoInstance
				.map((itemInstaces) => {
					console.log(itemInstaces.starListId);
					return itemInstaces.starListId;
				})
				.includes(list.id);
		}

		return {
			isPartOfThisList,
		};
	}, [data]);

	async function addToList() {
		try {
			await StarListItemCollection.create({
				...repo,
				githubRepoId: repo.id,
				starListId: list.id!,
			});
			setChecked(true);
		} catch (_) {
			console.log(_);
			toast.error("failed to add into the list");
		}
	}

	async function removeFromList() {
		try {
			await StarListItemCollection.delete(list.id!);
			setChecked(false);
		} catch (_) {
			toast.error("failed to remove from the list");
		}
	}

	return (
		<DropdownMenuItem className="gap-2" closeMenuOnclick={false}>
			<Checkbox
				onChange={(e) => {
					if (e.currentTarget.checked) {
						addToList();
					} else {
						removeFromList();
					}
				}}
				checked={typeof checked === "boolean" ? checked : isPartOfThisList}
			/>{" "}
			{list.title}
		</DropdownMenuItem>
	);
}
