import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: String(process.env.GITHUB_CLIENT_ID),
			clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
		}),
	],
	callbacks: {
		async signIn({ user, credentials }) {
			console.log({ user, credentials });
			return true;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
