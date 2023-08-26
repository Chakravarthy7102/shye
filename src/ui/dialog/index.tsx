"use client";

import { X } from "@/lib/icons";
import { useRef, useEffect } from "react";

type Props = {
	title: string;
	onClose: () => void;
	onOk: () => void;
	showDialog: boolean;
	children: React.ReactNode;
};

export default function Dialog({
	title,
	onClose,
	onOk,
	children,
	showDialog,
}: Props) {
	const dialogRef = useRef<null | HTMLDialogElement>(null);

	useEffect(() => {
		const header = document.getElementById("shye-header");
		if (showDialog === true) {
			dialogRef.current?.showModal();
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = "12px";
		} else {
			dialogRef.current?.close();
			document.body.style.overflow = "auto";
			document.body.style.marginRight = "0px";
		}

		if (header) {
			header.style.paddingRight =
				showDialog === true ? "calc(2.5rem + 12px)" : "2.5rem";
		}
	}, [showDialog]);

	const closeDialog = () => {
		dialogRef.current?.close();
		onClose();
	};

	const dialog: JSX.Element | null =
		showDialog === true ? (
			<dialog
				ref={dialogRef}
				className="fixed inset-0 z-10 bg-zinc-950 rounded-lg backdrop:bg-gray-800/50"
			>
				<div className="w-[500px] max-w-full bg-zinc-950 flex flex-col rounded-lg p-5 relative">
					<div className="flex flex-row justify-between mb-4 pt-2 px-5">
						<h1 className="text-xl text-zinc-200">{title}</h1>

						<X
							aria-label="close-btn"
							role="button"
							onClick={closeDialog}
							className="absolute top-3 right-3 cursor-pointer rounded-full border-none w-8 h-8 p-2 font-bold hover:bg-zinc-900 text-zinc-200"
						/>
					</div>
					<div className="px-5 pb-6">{children}</div>
				</div>
			</dialog>
		) : null;

	return dialog;
}
