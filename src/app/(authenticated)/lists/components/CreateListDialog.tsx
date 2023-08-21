"use client";
import { useState } from "react";

import Button from "@/ui/button";
import Dialog from "@/ui/dialog";
import Input from "@/ui/form/input";
import Label from "@/ui/form/label";
import Textarea from "@/ui/form/textarea";

export default function CreateListDialog() {
	const [isDialogOpen, setIsDialogOpen] = useState(true);
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
				<form className="space-y-3">
					<Input fullWidth placeholder="Name the list" />
					<Textarea fullWidth placeholder="Write a description" />
					<Button full>Create</Button>
				</form>
			</Dialog>
		</>
	);
}
