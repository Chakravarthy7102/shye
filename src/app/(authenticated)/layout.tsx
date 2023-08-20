import { redirect } from "next/navigation";

import AuthContext from "@/context/AuthContext";
import getSession from "@/utils/getSession";

import RootLayout from "../layout";
import Footer from "@/components/navigation/footer";

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
			<AuthContext session={session}>{children}</AuthContext>
			<Footer />
		</RootLayout>
	);
}
