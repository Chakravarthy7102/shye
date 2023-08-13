import "./globals.css"
;
import { Session } from "next-auth";
import { Inter } from "next/font/google";

import Header from "@/components/header";

export const metadata = {
	title: "Shye",
	description: "Create your private Github stars list.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session | null;
}) {
	return (
		<html lang="en">
			<body
				className={
					inter.className +
					" bg-gradient-to-br from-zinc-950 via-zinc-950 to-blue-950 h-screen text-zinc-200"
				}
			>
				{session ? <Header /> : null}
				{children}
			</body>
		</html>
	);
}
