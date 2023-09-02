"use client";

import React from "react";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Button from "@/ui/button";
import classNames from "@/utils/className";
import { resetDatabase } from "@/database/utils/resetDatabase";
import DropdownMenuContent, {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { MenuIcon, X } from "@/lib/icons";

export default function Header({ session }: { session: Session }) {
	const pathname = usePathname();
	return (
		<header
			id="shye-header"
			className="fixed w-full backdrop-blur-md z-50 flex justify-between sm:px-10 px-5 py-5"
		>
			<div className="flex items-center gap-4">
				<h2 className="text-2xl font-bold mr-10 bg-gradient-to-br from-zinc-600 via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
					Shye
				</h2>
				<div className="sm:flex gap-4 hidden">
					<Link
						className={classNames(
							"hover:underline underline-offset-4",
							pathname === "/stars" ? "underline font-semibold" : undefined
						)}
						href="/stars"
					>
						Stars
					</Link>
					<Link
						className={classNames(
							"hover:underline underline-offset-4",
							pathname === "/lists" ? "underline font-semibold" : undefined
						)}
						href="/lists"
					>
						Lists
					</Link>
				</div>
			</div>
			<div className="sm:flex hidden items-center gap-4">
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
			<DropdownMenu className="sm:hidden block">
				<DropdownMenuTrigger>
					<Button color="muted" className="rounded-full p-3">
						<MenuIcon className="h-5 w-5" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="fixed z-50 inset-0 max-h-none h-screen">
					{({ closeMenu }) => {
						return (
							<React.Fragment>
								<div className="flex justify-between mx-2 mb-2">
									<h2 className="text-2xl font-bold mr-10 bg-gradient-to-br from-zinc-600 via-zinc-300 to-zinc-500 text-transparent bg-clip-text">
										Shye
									</h2>
									<X
										onClick={closeMenu}
										className="cursor-pointer w-8 h-8 p-1 font-bold hover:bg-zinc-900 rounded-full"
									/>
								</div>
								<DropdownMenuItem>
									<Link
										className={classNames(
											"hover:underline underline-offset-4",
											pathname === "/stars"
												? "underline font-semibold"
												: undefined
										)}
										href="/stars"
									>
										Stars
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										className={classNames(
											"hover:underline underline-offset-4",
											pathname === "/lists"
												? "underline font-semibold"
												: undefined
										)}
										href="/lists"
									>
										Lists
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Button size="sm" onClick={() => signOut()}>
										Sign Out
									</Button>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Button
										size="sm"
										onClick={async () => {
											await resetDatabase();
											window.location.reload();
										}}
									>
										Reset Database
									</Button>
								</DropdownMenuItem>
							</React.Fragment>
						);
					}}
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
}
