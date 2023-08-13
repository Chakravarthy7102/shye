import { Session } from "next-auth";
import { headers } from "next/headers";

export default async function getSession(): Promise<Session | null> {
	const cookie = headers().get("cookie") ?? "";
	const response = await fetch(
		`${process.env.LOCAL_AUTH_URL}/api/auth/session`,
		{
			headers: {
				cookie,
			},
		}
	);

	const session = await response.json();

	return Object.keys(session).length > 0 ? session : null;
}
