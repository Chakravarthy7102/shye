export const BASE_URL = "https://api.github.com/";

export function getDefaultHeader(token: string) {
	return {
		Accept: "application/vnd.github+json",
		Authorization: `Bearer ${token}`,
		"X-GitHub-Api-Version": "2022-11-28",
	};
}