import { redirect } from "next/navigation";

import AuthContext from "@/context/AuthContext";
import getSession from "@/utils/getSession";

import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";

import RootLayout from "../layout";
import { Toaster } from "react-hot-toast";

export default async function AuthenticatedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getSession();

	if (session === null) {
		redirect("/auth");
	}

	return (
		<RootLayout session={session}>
			<AuthContext session={session}>
				<Header session={session} />
				<main className="max-w-5xl mx-auto pt-24">{children}</main>
				<Toaster position="bottom-center" />
			</AuthContext>
			<Footer />
		</RootLayout>
	);
}
