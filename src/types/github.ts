import languageColors from "@/data/colors.json";

export type Languages = keyof typeof languageColors;

export type StarredRepository = {
	id: number;
	name: string;
	full_name: string;
	owner: GithubUser;
	private: boolean;
	html_url: string;
	description: string;
	url: string;
	stargazers_url: string;
	language: Languages;
	stargazers_count: number;
	topics: string[];
	visibility: string;
	created_at: string;
	updated_at: string;
	forks: number;
	watchers: number;
};

export type GithubUser = {
	login: string;
	id: number;
	avatar_url: string;
	gravatar_id: string;
	followers_url: string;
	following_url: string;
	html_url: string;
};
