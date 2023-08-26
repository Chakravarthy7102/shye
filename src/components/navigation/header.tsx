"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Button from "@/ui/button";
import classNames from "@/utils/className";
import { resetDatabase } from "@/database/utils/resetDatabase";

export default function Header({ session }: { session: Session }) {
	const pathname = usePathname();
	return (
		<header
			id="shye-header"
			className="fixed w-full backdrop-blur-md z-50 flex justify-between px-10 py-5"
		>
			<div className="flex items-center gap-4">
				<h2 className="text-2xl font-bold mr-10 bg-gradient-to-br from-zinc-600 via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
					Shye
				</h2>
				<Link
					className={classNames(
						"hover:underline underline-offset-4",
						pathname === "/lists" ? "underline font-semibold" : undefined
					)}
					href="/lists"
				>
					Lists
				</Link>
				<Link
					className={classNames(
						"hover:underline underline-offset-4",
						pathname === "/stars" ? "underline font-semibold" : undefined
					)}
					href="/stars"
				>
					Stars
				</Link>
			</div>
			<div className="flex items-center gap-4">
				<Image
					className="rounded-full"
					src={session.user.picture}
					alt="profile image"
					height={40}
					width={40}
				/>
				<Button size="sm" onClick={() => signOut()}>
					Sign Out
				</Button>
				<Button
					size="sm"
					onClick={async () => {
						await resetDatabase();
						window.location.reload();
					}}
				>
					Reset Database
				</Button>
			</div>
		</header>
	);
}
