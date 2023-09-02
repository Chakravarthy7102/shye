import Link from "next/link";

import languageColors from "@/data/colors.json";
import { Fork, Star } from "@/lib/icons";
import Button from "@/ui/button";
import { StarredRepository } from "@/types/github";


import AddToListDropdownMenu from "./add-to-list-dropdown-menu";

export default function StarredRepoCard(repo: StarredRepository) {
	return (
		<div className="bg-zinc-950/20 border border-blue-500/20 rounded-xl p-5 space-y-3">
			<div className="flex justify-between items-center">
				<h4 className="inline-block text-xl font-semibold text-zinc-200 hover:underline">
					<Link href={repo.html_url} target="_blank">
						{repo.owner.login} / {repo.name}
					</Link>
				</h4>
				<AddToListDropdownMenu />
			</div>
			<p className="text-zinc-400">{repo.description}</p>
			<div className="flex flex-wrap gap-5 items-center text-sm text-zinc-400">
				{repo.language ? (
					<div className="flex items-center gap-1">
						<span
							className="h-4 w-4 rounded-full"
							style={{
								backgroundColor:
									languageColors[repo.language]?.color ?? undefined,
							}}
						/>
						{repo.language}
					</div>
				) : null}
				<Button
					color="muted"
					className="gap-1 hover:text-zinc-100"
					href={`https://github.com/${repo.owner.login}/${repo.name}/stargazers`}
					target="_blank"
				>
					<Star className="h-4 w-4 mb-1" /> {repo.stargazers_count}
				</Button>
				<Button
					color="muted"
					href={`https://github.com/${repo.owner.login}/${repo.name}/forks`}
					target="_blank"
					className="gap-1 hover:text-zinc-100"
				>
					<Fork className="h-4 w-4" />
					{repo.forks}
				</Button>
			</div>
		</div>
	);
}
