"use client";
import React from "react";

import { Loader, MoreVertical, Plus, X } from "@/lib/icons";
import Button from "@/ui/button";
import DropdownMenuContent, {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { StarredRepository } from "@/types/github";

import { useGetStarLists } from "../../../lists/_lib";
import CreateListDialog from "../../../lists/_components/dialogs/create-list-dialog";
import AddToListDropdownItem from "./add-to-list-item";

export type AddToListDropdownMenuProps = {
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
									return (
										<AddToListDropdownItem
											key={list.id}
											list={list}
											repo={repo}
										/>
									);
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
