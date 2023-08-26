import classNames from "@/utils/className";

type TextareaProps = JSX.IntrinsicElements["textarea"] & {
	fullWidth?: boolean;
};

export default function Textarea(props: TextareaProps) {
	const { rows = 10, cols = 30, className } = props;
	return (
		<textarea
			rows={rows}
			cols={cols}
			className={classNames(
				"bg-zinc-900/50 border border-zinc-700/80 px-4 py-2 text-zinc-300 rounded-md text-sm hover:opacity-70",
				props.fullWidth ? "w-full" : null,
				className
			)}
			{...props}
		></textarea>
	);
}
