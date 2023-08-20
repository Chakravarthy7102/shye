import { BASE_URL, getDefaultHeader } from "../config";
import { GithubUser, StarredRepository } from "./types";

export async function getStargazers(
	accessToken: string,
	repo = "octokit.js",
	owner = "octokit"
): Promise<Array<GithubUser>> {
	const res = await fetch(BASE_URL + `repos/${owner}/${repo}/stargazers`, {
		method: "GET",
		headers: getDefaultHeader(accessToken),
	});
	return res.json();
}

export async function getStarredRepos(
	accessToken: string
): Promise<Array<StarredRepository>> {
	const res = await fetch(BASE_URL + `user/starred`, {
		method: "GET",
		headers: getDefaultHeader(accessToken),
	});

	return res.json();
}

export async function starRepo(
	accessToken: string,
	owner: string,
	repo: string
) {
	await fetch(BASE_URL + `user/starred/${owner}/${repo}`, {
		method: "PUT",
		headers: getDefaultHeader(accessToken),
	});
}

export async function unStarRepo(
	accessToken: string,
	owner: string,
	repo: string
) {
	await fetch(BASE_URL + `user/starred/${owner}/${repo}`, {
		method: "DELETE",
		headers: getDefaultHeader(accessToken),
	});
}
