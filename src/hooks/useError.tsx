import Indicator from "@/ui/indicators";
import { useCallback, useState } from "react";

export default function useError(autoDisapper = false, duration = 3000) {
	const [error, _setError] = useState<string | undefined>(undefined);

	const setError = useCallback(
		(error: string | undefined) => {
			_setError(error);
			if (autoDisapper) {
				setTimeout(() => {
					_setError(undefined);
				}, duration);
			}
		},
		[autoDisapper]
	);

	const ErrorMessage = useCallback(() => {
		return error ? <Indicator message={error} type="error" /> : null;
	}, [error]);

	return [ErrorMessage, setError] as const;
}
