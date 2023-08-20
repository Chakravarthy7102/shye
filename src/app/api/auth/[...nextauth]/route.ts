import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: String(process.env.GITHUB_CLIENT_ID),
			clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account && account.access_token) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.user = token;
			return session;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
