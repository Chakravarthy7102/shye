"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

import Button from "@/ui/button";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session }) {
	return (
		<header className="flex justify-end px-10 py-5">
			<div className="flex items-center gap-4">
				<Image
					className="rounded-full"
					src={session.user.picture}
					alt="profile image"
					height={50}
					width={50}
				/>
				<Button size="sm" onClick={() => signOut()}>
					Sign Out
				</Button>
			</div>
		</header>
	);
}
