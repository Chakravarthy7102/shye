"use client";

import React, { useMemo, useState } from "react";

import { Loader, MoreVertical, Plus, X } from "@/lib/icons";
import Button from "@/ui/button";
import DropdownMenuContent, {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import Checkbox from "@/ui/form/checkbox";

import { useGetStarListItems, useGetStarLists } from "../../lists/_lib";
import CreateListDialog from "../../lists/_components/dialogs/create-list-dialog";
import { StarsList } from "@/database/schemas/star-list";
import StarListItemCollection from "@/database/schemas/star-list-item";
import { StarredRepository } from "@/types/github";
import { toast } from "react-hot-toast";

type AddToListDropdownMenuProps = {
	repo: StarredRepository;
};

export default function AddToListDropdownMenu({
	repo,
}: AddToListDropdownMenuProps) {
	const { data: lists, isLoading } = useGetStarLists();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button color="muted" className="rounded-full p-3">
					<MoreVertical className="w-5 h-5" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{({ closeMenu }) => {
					return (
						<React.Fragment>
							<div className="flex justify-between mx-2 -mt-3 mb-2">
								<h4>Lists</h4>
								<X
									onClick={closeMenu}
									className="cursor-pointer w-5 h-5 p-1 font-bold hover:bg-zinc-900 rounded-full"
								/>
							</div>
							{isLoading && lists === undefined ? (
								<Loader className="animate-spin h-5 w-5 m-auto" />
							) : null}
							{lists &&
								lists.map((list) => {
									return <ListItem list={list} repo={repo} />;
								})}
							<CreateListDialog
								customTrigger={({ openDialog }) => {
									return (
										<Button
											color="muted"
											className="text-xs w-full mt-3"
											onClick={openDialog}
										>
											<Plus className="-mr-2 h-3 w-3" />
											create list
										</Button>
									);
								}}
							/>
						</React.Fragment>
					);
				}}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

type ListItemProps = {
	list: StarsList;
} & AddToListDropdownMenuProps;

function ListItem({ list, repo }: ListItemProps) {
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
