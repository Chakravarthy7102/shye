type IndicatorProps = {
	type: "error" | "success" | "warning";
	message: string;
};

export default function Indicator(props: IndicatorProps) {
	const { message, type } = props;
    
	if (type === "error") {
		return (
			<span className="text-red-800 bg-red-500/10 px-4 rounded-md">
				{message}
			</span>
		);
	}

	if (type === "success") {
		return (
			<span className="text-green-800 bg-green-500/10 px-4 rounded-md">
				{message}
			</span>
		);
	}

	if (type === "warning") {
		return (
			<span className="text-yellow-800 bg-yellow-500/10 px-4 rounded-md">
				{message}
			</span>
		);
	}

	throw new Error("Yo!, please enter a valid type.");
}
