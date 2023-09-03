"use client";
import React from "react";

import { MoreVertical, X } from "@/lib/icons";
import Button from "@/ui/button";
import DropdownMenuContent, {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import Checkbox from "@/ui/form/checkbox";

export default function AddToListDropdownMenu() {

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
							<DropdownMenuItem className="gap-2" closeMenuOnclick={false}>
								<Checkbox /> Settings
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
							<DropdownMenuItem className="gap-2">
								<Checkbox /> Stars
							</DropdownMenuItem>
						</React.Fragment>
					);
				}}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
