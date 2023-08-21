import classNames from "@/utils/className";
import { forwardRef } from "react";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
	fullWidth?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(props, forwardedRef) => {
		const { className } = props;
		return (
			<input
				ref={forwardedRef}
				{...props}
				className={classNames(
					"bg-zinc-900/50 border border-zinc-700/80 px-4 py-2 text-zinc-300 rounded-md text-sm hover:opacity-70",
					props.fullWidth ? "w-full" : null,
					className
				)}
			/>
		);
	}
);

export default Input;
