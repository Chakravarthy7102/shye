import CreateListDialog from "./components/CreateListDialog";

export default function Lists() {
	const lists = [];
	return (
		<section className="max-w-5xl mx-auto pt-10 h-screen">
			{lists.length > 0 ? (
				<div className="flex justify-end">
					<CreateListDialog />
				</div>
			) : null}
			{lists.length === 0 ? (
				<div className="absolute inset-0 flex flex-col gap-5 justify-center items-center ">
					<p className="font-semibold text-xl">
						No lists are found, get started by creating new lists.
					</p>
					<CreateListDialog />
				</div>
			) : null}
		</section>
	);
}
