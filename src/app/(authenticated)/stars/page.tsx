import { redirect } from "next/navigation";

import { getStarredRepos } from "@/api/github/github";
import getSession from "@/utils/getSession";

import StarredRepoCard from "./_components/starred-repo-card";
import Pagination from "./_components/pagination";

export default async function User({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const session = await getSession();

	if (!session) {
		redirect("/auth");
	}

	const page = (searchParams && Number(searchParams.page)) || 1;

	const starredRepos = await getStarredRepos(session.user.accessToken, page);
	const reposLength = starredRepos.length;

	return (
		<section className="px-10">
			<h1 className="flex gap-3 text-3xl font-bold my-5">Stars</h1>
			{reposLength === 0 ? (
				<div className="text-center text-2xl font-semibold mt-44">
					Not Respositories Found
				</div>
			) : null}
			<div className="flex flex-col gap-8 pb-10">
				{starredRepos.map((repo) => {
					return <StarredRepoCard key={repo.created_at} {...repo} />;
				})}
			</div>
			<Pagination page={page} result={reposLength} />
		</section>
	);
}
