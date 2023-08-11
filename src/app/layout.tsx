import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Shye",
	description: "Create your private Github stars list.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={
					inter.className + " bg-gradient-to-br from-zinc-950 via-zinc-950 to-blue-950 h-screen text-zinc-200"
				}
			>
				{children}
			</body>
		</html>
	);
}
