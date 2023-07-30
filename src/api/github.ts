export const BASE_URL = "https://api.github.com/";

function getDefaultHeader(token: string) {
	return {
		Accept: "application/vnd.github+json",
		Authorization: `Bearer ${token}`,
		"X-GitHub-Api-Version": "2022-11-28",
	};
}

export async function getStargazers(
	accessToken: string,
	repo = "octokit.js",
	owner = "octokit"
) {
	const res = await fetch(BASE_URL + `repos/${owner}/${repo}/stargazers`, {
		headers: {
			...getDefaultHeader(accessToken),
		},
	});
	return res.json();
}
