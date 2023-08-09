type FeatureCardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

export default function FeatureCard({
	description,
	icon,
	title,
}: FeatureCardProps) {
	return (
		<div
			className={
				"flex flex-col items-start gap-3 backdrop-blur-sm shadow-blue-950/70 shadow-2xl p-8 border border-blue-900 rounded-lg"
			}
		>
			{icon}
			<h4 className="text-2xl bg-gradient-to-tr from-zinc-200 to-zinc-500 text-transparent bg-clip-text font-bold">
				{title}
			</h4>
			<p className="text-md text-zinc-400">{description}</p>
		</div>
	);
}

export function Counter({ count }: { count: string }) {
	return (
		<span className="text-2xl text-zinc-400 border-2 border-zinc-500 h-12 font-bold w-12 px-4 pt-2 rounded-full">
			{count}
		</span>
	);
}
