import { Github } from "@/lib/icons";

import { GithubAuth } from "./components/GithubAuth";
import getSession from "@/utils/getSession";
import { redirect } from "next/navigation";

export default async function Auth() {
	const session = await getSession();

	if (session !== null) {
		redirect("/user");
	}

	return (
		<section className="max-w-md flex justify-center items-center h-screen m-auto">
			<div className="w-full flex flex-col items-center bg-zinc-200 mx-auto rounded-lg p-10 text-zinc-900 text-center shadow-2xl shadow-blue-900/25">
				{/* @todo: replace github icon with app logo(WDL) */}
				<Github className="h-10 w-10 m-5" />
				<GithubAuth />
			</div>
		</section>
	);
}
