type BadgeProps = {
	children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
	return (
		<span className="inline-block bg-gradient-to-t from-blue-950 to-blue-900 border border-blue-500 rounded-full text-sm px-3 py-1 text-zinc-100 mb-4">
			{children}
		</span>
	);
}
