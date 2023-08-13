import Button from "@/ui/button";
import RootLayout from "./layout";

export default async function Notfound() {
	return (
		<RootLayout>
			<main className="flex flex-col gap-5 justify-center items-center h-screen">
				<div className="text-center">
					<h1 className="text-6xl font-bold bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 text-transparent bg-clip-text">
						404
					</h1>
					<span className="text-md text-zinc-400">
						The page you are looking for does not exits.
					</span>
				</div>
				<Button href="/" size="sm">
					Go Back
				</Button>
			</main>
		</RootLayout>
	);
}
