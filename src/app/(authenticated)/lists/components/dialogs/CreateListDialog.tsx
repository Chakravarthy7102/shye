"use client";

import { useState } from "react";

import Button from "@/ui/button";
import Dialog from "@/ui/dialog";
import Input from "@/ui/form/input";
import Textarea from "@/ui/form/textarea";
import StarsListCollection from "@/database/schemas/star-list";
import useError from "@/hooks/useError";

export default function CreateListDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [title, setTitle] = useState<string | null>(null);
	const [description, setDescription] = useState("");

	const [ErrorMessage, setErrorMessage] = useError(true);

	async function createList(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (title && title.trim().length > 3) {
			try {
				await StarsListCollection.create({
					title,
					description,
					reposCount: 0,
				});
			} catch (err: any) {
				setErrorMessage(err.message);
			}
		} else {
		}
	}

	return (
		<>
			<Button onClick={() => setIsDialogOpen(true)} size="sm">
				Create List
			</Button>
			<Dialog
				onClose={() => setIsDialogOpen(false)}
				onOk={() => {
					setIsDialogOpen(false);
				}}
				showDialog={isDialogOpen}
				title="Create list"
			>
				<p className="text-sm text-zinc-600 mb-4">
					Create a list to organize your starred repositories.
				</p>
				<form className="space-y-3" onSubmit={createList}>
					<Input
						aria-label="name-of-the-list"
						required
						min={3}
						onChange={(e) => setTitle(e.currentTarget.value)}
						fullWidth
						placeholder="Name the list"
					/>
					<Textarea
						onChange={(e) => setDescription(e.currentTarget.value)}
						fullWidth
						placeholder="Write a description"
					/>
					<ErrorMessage />
					<Button
						role="button"
						disabled={title === null || title.trim().length < 3}
						full
					>
						Create
					</Button>
				</form>
			</Dialog>
		</>
	);
}
