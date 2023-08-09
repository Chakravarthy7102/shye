import { CheckCircle, Github, Lock, Refresh } from "@/components/icons";
import FeatureCard, { Counter } from "@/components/landing/FeatureCard";
import Link from "next/link";

const features = [
	{
		title: "Organize Privately",
		description:
			"Keep track of your favorite projects without making your likes public.",
		icon: <Lock color="white" />,
	},
	{
		title: "Easy to Use",
		description: "Simple and intuitive interface to manage your starred items.",
		icon: <CheckCircle color="white" />,
	},
	{
		title: "Sync with GitHub",
		description:
			"Automatically sync your liked projects from GitHub to your private list.",
		icon: <Refresh color="white" />,
	},
];

const steps = [
	{
		title: "Connect Your GitHub Account",
		description:
			"To get started, sign up using your GitHub account. Our platform ensures a seamless integration, enabling you to manage your starred projects without any hassle.",
		icon: <Counter count="1" />,
	},
	{
		title: "Sync Your Liked Projects",
		description:
			"Once you're signed in, effortlessly connect your GitHub account. Our system will automatically sync your liked projects, bringing them into your private list.",
		icon: <Counter count="2" />,
	},
	{
		title: "Organize Your Private List",
		description:
			"Begin adding your preferred projects to your private list. Organize them into categories or groups that make sense to you. Enjoy the freedom to curate your list without affecting your public GitHub profile.",
		icon: <Counter count="3" />,
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center text-zinc-400 bg-[url('/images/landing/overlay-bg.jpg')] bg-no-repeat bg-cover">
			<section className="flex justify-between py-72 px-26 items-center">
				<div className="max-w-8xl mx-auto px-8 text-center">
					<h1 className="text-7xl text-zinc-200 font-bold max-w-3xl tracking-wide">
						Your Private GitHub{" "}
						<span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 text-transparent bg-clip-text">
							Stars Manager.
						</span>
					</h1>
					<p className="text-lg text-zinc-300 mt-5">
						Save and organize your favorite GitHub projects privately.
					</p>
					<button className="bg-zinc-200 text-zinc-900 text-md font-semibold px-4 py-2 rounded-md mt-5 hover:opacity-80 shadow-md shadow-zinc-500">
						Get Started
					</button>
				</div>
			</section>
			<section className="flex flex-col pb-52">
				<div className="max-w-7xl mx-auto px-8">
					<h2 className="text-4xl font-bold bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-500 text-transparent bg-clip-text mb-10">
						Features
					</h2>
					<div className="grid grid-cols-3 grid-rows-1 gap-5 mt-10">
						{features.map((feature) => (
							<FeatureCard {...feature} />
						))}
					</div>
				</div>
			</section>
			<section className="flex flex-col pb-52">
				<div className="max-w-7xl mx-auto px-8">
					<h2 className="text-4xl font-bold bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-500 text-transparent bg-clip-text mb-10">
						How it work
					</h2>
					<div className="grid grid-cols-3 grid-rows-1 gap-5 mt-10">
						{steps.map((step) => (
							<FeatureCard {...step} />
						))}
					</div>
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-8 backdrop-blur-md border border-blue-900 rounded-lg pt-10 pb-4 mb-32 shadow-blue-950/70 shadow-2xl">
				<h2 className="text-2xl font-bold bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-500 text-transparent bg-clip-text">
					Get Started
				</h2>
				<div className="py-5">
					<p>
						Join our community of developers who are managing their private
						GitHub stars.
					</p>
					<button className="bg-zinc-200 text-zinc-900 text-md font-semibold px-4 py-2 rounded-md mt-5 hover:opacity-80 shadow-md shadow-zinc-500">
						Sign Up
					</button>
				</div>
			</section>
			<footer className="flex flex-col py-10 text-center">
				<div className="flex justify-center mb-2">
					<Link href="https://github.com/Chakravarthy7102/shye">
						<Github />
					</Link>
				</div>
				<span>
					Released under the ISC License. <br /> Copyright &copy;{" "}
					{new Date().getFullYear()} Shye Contributors.
				</span>
			</footer>
		</main>
	);
}
