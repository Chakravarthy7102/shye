"use client";

import { useEffect, useState } from "react";

import Button from "@/ui/button";
import Dialog from "@/ui/dialog";
import Input from "@/ui/form/input";
import Textarea from "@/ui/form/textarea";
import { Plus } from "@/lib/icons";
import Indicator from "@/ui/indicators";

import { useCreateListMutation } from "../../_lib";

export default function CreateListDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const [title, setTitle] = useState<string | null>(null);
	const [description, setDescription] = useState("");

	const { mutation, error, isLoading, isSuccess } = useCreateListMutation();

	async function createList(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (title && title.trim().length > 3) {
			mutation({ title: title.trim(), description });
		}
	}

	useEffect(() => {
		if (isSuccess) {
			window.location.reload();
		}
	}, [isSuccess]);

	return (
		<>
			<Button onClick={() => setIsDialogOpen(true)} size="sm">
				<Plus className="-mr-2" />
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
					{error ? (
						<Indicator message={error} type="error" />
					) : null}
					<Button
						isLoading={isLoading}
						role="button"
						disabled={title === null || title.trim().length < 3 || isLoading}
						full
					>
						Create
					</Button>
				</form>
			</Dialog>
		</>
	);
}
