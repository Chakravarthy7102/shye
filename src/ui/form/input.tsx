import classNames from "@/utils/className";
import { forwardRef } from "react";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
	fullWidth?: boolean;
	error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(props, forwardedRef) => {
		const { className, error, fullWidth, ...restProps } = props;
		return (
			<input
				ref={forwardedRef}
				{...restProps}
				className={classNames(
					"bg-zinc-900/50 border border-zinc-700/80 px-4 py-2 text-zinc-300 rounded-md text-sm hover:opacity-70",
					fullWidth ? "w-full" : null,
					error ? "border border-red-500" : null,
					className
				)}
			/>
		);
	}
);

export default Input;
