import { StarsList } from "@/database/schemas/star-list";
import Link from "next/link";

type StarsListProps = StarsList;

export default function StarList(props: StarsListProps) {
	const { reposCount, title, description, id } = props;
	return (
		<Link
			href={`/lists/${id}/${title.toLowerCase()}`}
			className="cursor-pointer bg-zinc-950/20 backdrop-blur-md border border-blue-500/20 rounded-xl p-5 space-y-3"
		>
			<h4 className="text-xl font-bold first-letter:capitalize hover:underline">
				{title}
			</h4>
			<p className="text-zinc-400 m-0 whitespace-nowrap overflow-hidden text-ellipsis">
				{description}
			</p>
			<span className="block text-sm text-zinc-400 mt-10">
				{reposCount} repository
			</span>
		</Link>
	);
}
