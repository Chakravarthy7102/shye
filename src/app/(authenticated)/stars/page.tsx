import { redirect } from "next/navigation";

import { getStarredRepos } from "@/api/github/github";
import getSession from "@/utils/getSession";
import StarredRepoCard from "./components/StarredRepoCard";

export default async function User() {
	const session = await getSession();

	if (!session) {
		redirect("/auth");
	}

	const starredRepos = await getStarredRepos(session.user.accessToken);

	return (
		<section className="max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold my-5">Stars</h1>
			<div className="flex flex-col gap-8">
				{starredRepos.map((repo) => {
					return <StarredRepoCard {...repo} />;
				})}
			</div>
		</section>
	);
}
