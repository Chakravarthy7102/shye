"use client";

import { signOut } from "next-auth/react";

import Button from "@/ui/button";

export default function Header() {
	return (
		<header>
			<Button onClick={() => signOut()}>Sign Out</Button>
		</header>
	);
}
