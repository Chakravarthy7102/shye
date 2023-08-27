import { useCallback, useEffect, useState } from "react";

type IndicatorProps = {
	type: "error" | "success" | "warning";
	message: string;
	autoDissapear?: boolean;
	duration?: number;
};

export default function Indicator(props: IndicatorProps) {
	const { type, autoDissapear = false, duration = 3000 } = props;
	const [error, _setError] = useState<string | undefined>(props.message);

	const Component = useCallback(
		({ message, type }: Pick<IndicatorProps, "message" | "type">) => {
			if (type === "error") {
				return (
					<p className="text-red-800 bg-red-500/10 px-4 rounded-md">
						{message}
					</p>
				);
			}

			if (type === "success") {
				return (
					<p className="text-green-800 bg-green-500/10 px-4 rounded-md">
						{message}
					</p>
				);
			}

			if (type === "warning") {
				return (
					<p className="text-yellow-800 bg-yellow-500/10 px-4 rounded-md">
						{message}
					</p>
				);
			}

			return null;
		},
		[type]
	);

	useEffect(() => {
		_setError(error);
		if (autoDissapear) {
			setTimeout(() => {
				_setError(undefined);
			}, duration);
		}
	}, [autoDissapear]);

	return error ? <Component message={error} type={type} /> : null;
}
